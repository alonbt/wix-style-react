import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { dataHooks } from './constants';

export const radioButtonUniDriverFactory = (base, body) => {
  const getByDataHook = dataHook => base.$(`[data-hook="${dataHook}"]`);
  const radioButtonWrapper = () => getByDataHook(dataHooks.RadioButtonWrapper);
  const radioButtonInput = () => getByDataHook(dataHooks.RadioButtonInput);
  const radioButtonLabel = () => getByDataHook(dataHooks.RadioButtonLabel);
  const radioButtonContent = () => getByDataHook(dataHooks.RadioButtonContent);

  return {
    ...baseUniDriverFactory(base, body),

    /** Simulating a check action by clicking the input element */
    check: () => radioButtonInput().click(),

    /** Getting the component's "checked" value */
    isChecked: () => radioButtonInput()._prop('checked'),

    /** Getting the component's "disabled" value */
    isDisabled: () => radioButtonInput()._prop('disabled'),

    /** Getting the component's label text value */
    getLabel: () => radioButtonLabel().text(),

    /** Getting the component's label element */
    // eslint-disable-next-line no-restricted-properties
    getLabelElement: () => radioButtonLabel().getNative(),

    /** Getting the component's input value */
    getValue: () => radioButtonInput()._prop('value'),

    /** Getting the component's tab-index value */
    getTabIndex: () => radioButtonWrapper().attr('tabIndex'),

    /** Getting the component's content element */
    // eslint-disable-next-line no-restricted-properties
    getContent: () => radioButtonContent().getNative(),
  };
};
