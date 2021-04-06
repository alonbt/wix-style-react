import selectorDriverFactory from '../Selector/Selector.driver';
import editableRowDriverFactory from './EditableRow/EditableRow.driver';
import ReactTestUtils from 'react-dom/test-utils';

const editableSelectorDriverFactory = ({ element, eventTrigger }) => {
  const newRowButton = () =>
    element.querySelector('[data-hook="new-row-button-text"]');
  const selectorRowDriver = index =>
    selectorDriverFactory({
      element: element.querySelectorAll('[data-hook="editable-selector-item"]')[
        index
      ],
      wrapper: element,
    });
  const editButtonAt = index =>
    element.querySelectorAll('[data-hook="edit-item"]')[index];
  const deleteButtonAt = index =>
    element.querySelectorAll('[data-hook="delete-item"]').item(index);
  const editableRowDriver = () =>
    editableRowDriverFactory({
      element: element.querySelector('[data-hook="edit-row-wrapper"]'),
      wrapper: element,
      eventTrigger,
    });
  const isEditRowActive = () =>
    !!element.querySelectorAll('[data-hook="edit-row-wrapper"]').length;

  return {
    items: () => {
      return [
        ...element.querySelectorAll('[data-hook="editable-selector-item"]'),
      ].map(selector => selectorDriverFactory({ element: selector }));
    },
    exists: () => !!element,
    isEditing: () => isEditRowActive(),
    isEditingRow: () => !!(isEditRowActive() && editableRowDriver().getText()),
    isAddingRow: () => !!(isEditRowActive() && !editableRowDriver().getText()),
    newRowButton,
    deleteButtonAt,
    editButtonAt,
    addNewRow: label => {
      ReactTestUtils.Simulate.click(newRowButton());
      editableRowDriver().setText(label);
    },
    editRow: (index, label) => {
      ReactTestUtils.Simulate.click(editButtonAt(index));
      editableRowDriver().setText(label);
    },
    deleteRow: index => {
      ReactTestUtils.Simulate.click(deleteButtonAt(index));
    },
    startAdding: () => ReactTestUtils.Simulate.click(newRowButton()),
    startEditing: index => ReactTestUtils.Simulate.click(editButtonAt(index)),
    clickApprove: () => editableRowDriver().clickApprove(),
    clickCancel: () => editableRowDriver().clickCancel(),
    title: () =>
      element.querySelector('[data-hook="editable-selector-title"] > span')
        .textContent,
    toggleItem: index => selectorRowDriver(index).toggle(),
  };
};

export default editableSelectorDriverFactory;
