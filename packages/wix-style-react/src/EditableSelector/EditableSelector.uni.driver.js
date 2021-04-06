import {
  baseUniDriverFactory,
  findByHook,
  findByHookAtIndex,
  countByHook,
} from '../../test/utils/unidriver';
import { selectorUniDriverFactory } from '../Selector/Selector.uni.driver';
import { editableRowUniDriverFactory } from './EditableRow/EditableRow.uni.driver';
import { dataHooks } from './constants';

export const editableSelectorUniDriverFactory = (base, body) => {
  const newRowButton = () => findByHook(base, dataHooks.newRowButtonText);
  const selectorRowDriver = async index =>
    selectorUniDriverFactory(
      await findByHookAtIndex(base, dataHooks.item, index),
      body,
    );
  const editButtonAt = index =>
    findByHookAtIndex(base, dataHooks.editItem, index);
  const deleteButtonAt = index =>
    findByHookAtIndex(base, dataHooks.deleteItem, index);

  const editableRowDriver = () =>
    editableRowUniDriverFactory(
      findByHook(base, dataHooks.editRowWrapper),
      body,
    );
  const isEditRowActive = async () =>
    !!(await countByHook(base, dataHooks.editRowWrapper));
  return {
    ...baseUniDriverFactory(base),

    /**
     * Gets a list of selector drivers
     * @returns {Promise<SelectorUniDriver[]>}
     */
    items: () => {
      return base
        .$$(`[data-hook="${dataHooks.item}"]`)
        .map(selector => selectorUniDriverFactory(selector, body));
    },
    /**
     * Checks whether editing mode is active
     * @returns {Promise<boolean>}
     */
    isEditing: () => isEditRowActive(),
    /**
     * Checks wheter any row is being edited
     * @returns {Promise<boolean>}
     */
    isEditingRow: async () =>
      !!((await isEditRowActive()) && (await editableRowDriver().getText())),
    /**
     * Checks wheter any row is being added
     * @returns {Promise<boolean>}
     */
    isAddingRow: async () =>
      !!((await isEditRowActive()) && !(await editableRowDriver().getText())),
    /**
     * Gets the new row button wrapper
     * @returns {Promise<HTMLElement>}
     */
    newRowButton,
    /**
     * Gets the delete row button wrapper at index
     * @param {number} index Item index
     * @returns {Promise<HTMLElement>}
     */
    deleteButtonAt,
    /**
     * Gets the edit row button wrapper at index
     * @param {number} index Item index
     * @returns {Promise<HTMLElement>}
     */
    editButtonAt,
    /**
     * Adds new row and sets input value
     * @param {string} label Text to input
     * @returns {Promise<void>}
     */
    addNewRow: async label => {
      await newRowButton().click();
      return editableRowDriver().setText(label);
    },
    /**
     * Edits row and sets input value
     * @param {number} index Item index
     * @param {string} label Text to input
     * @returns {Promise<void>}
     */
    editRow: async (index, label) => {
      const editButton = await editButtonAt(index);
      await editButton.hover();
      await editButton.click();
      return editableRowDriver().setText(label);
    },
    /**
     * Clicks delete button at index
     * @param {number} index Item index
     * @returns {Promise<void>}
     */
    deleteRow: async index => {
      const deleteButton = await deleteButtonAt(index);
      await deleteButton.hover();
      return deleteButton.click();
    },
    /**
     * Clicks add new row button
     * @returns {Promise<void>}
     */
    startAdding: () => newRowButton().click(),
    /**
     * Clicks edit row button at index
     * @param {number} index Item index
     * @returns {Promise<void>}
     */
    startEditing: async index => (await editButtonAt(index)).click(),
    /**
     * Clicks appove button
     * @returns {Promise<void>}
     */
    clickApprove: () => editableRowDriver().clickApprove(),
    /**
     * Clicks cancel button
     * @returns {Promise<void>}
     */
    clickCancel: () => editableRowDriver().clickCancel(),
    /**
     * Gets the title
     * @returns {Promise<string>}
     */
    title: () => base.$(`[data-hook="${dataHooks.title}"] > span`).text(),
    /**
     * Toggles selector of the item at index
     * @param {number} index Item index
     * @returns {Promise<void>}
     */
    toggleItem: async index => (await selectorRowDriver(index)).toggle(),
  };
};
