import ReactTestUtils from 'react-dom/test-utils';
import { dataHooks } from './constants';

const radioButtonDriverFactory = ({ element }) => {
  const getByDataHook = dataHook =>
    element.querySelector(`[data-hook="${dataHook}"]`);
  const radioWrapper = () => getByDataHook(dataHooks.RadioButtonWrapper);
  const radioButton = () => getByDataHook(dataHooks.RadioButtonInput);
  const label = () => getByDataHook(dataHooks.RadioButtonLabel);

  return {
    /** Simulating a check action by clicking the input element */
    exists: () => !!element,

    /** Simulating a check action by clicking the input element */
    check: () => ReactTestUtils.Simulate.change(radioButton()),

    /** Getting the component's "checked" value */
    isChecked: () => radioButton().checked,

    /** Getting the component's "disabled" value */
    isDisabled: () => radioButton().disabled,

    /** Getting the component's label text value */
    getLabel: () => label().textContent,

    /** Getting the component's label element */
    getLabelElement: () => label(),

    /** Getting the component's input value */
    getValue: () => radioButton().value,

    /** Getting the component's tab-index value */
    getTabIndex: () => radioWrapper().getAttribute('tabIndex'),

    /** Getting the component's content element */
    getContent: () =>
      element.querySelector(`[data-hook="${dataHooks.RadioButtonContent}"]`),
  };
};

export default radioButtonDriverFactory;
