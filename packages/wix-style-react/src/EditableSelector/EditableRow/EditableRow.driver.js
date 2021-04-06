import inputDriverFactory from '../../Input/Input.driver';

const editableRowDriverFactory = ({ element, eventTrigger }) => {
  const find = dataHook => element.querySelector(`[data-hook="${dataHook}"]`);

  const inputDriver = () =>
    inputDriverFactory({
      element: find('edit-row-input'),
      wrapper: element,
    });

  return {
    exists: () => !!element,
    isInputFocused: () => inputDriver().isFocus(),
    clickApprove: () => eventTrigger.click(find('edit-row-approve-button')),
    isApproveDisabled: () => {
      const disabled = find('edit-row-approve-button').getAttribute(
        'aria-disabled',
      );
      return disabled === 'true';
    },
    clickCancel: () => eventTrigger.click(find('edit-row-cancel-button')),
    getText: () => inputDriver().getValue(),
    setText: text => inputDriver().enterText(text),
    keyDown: keyCode => inputDriver().trigger('keyDown', { keyCode }),
  };
};

export default editableRowDriverFactory;
