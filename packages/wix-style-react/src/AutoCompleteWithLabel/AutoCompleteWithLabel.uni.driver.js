import { baseUniDriverFactory } from '../../test/utils/unidriver';
import { testkit as inputUniDriverFactory } from '../Input/Input.uni.driver';
import { labelledElementDriverFactory as labelledElementUniDriverFactory } from '../LabelledElement/LabelledElement.uni.driver';
import dataHooks from './dataHooks';
import { dropdownLayoutDriverFactory } from '../DropdownLayout/DropdownLayout.uni.driver';

export const autoCompleteWithLabelDriverFactory = base => {
  const labelledElementSelector = `[data-hook="${dataHooks.labelledElement}"]`;
  const labelledElementDriver = labelledElementUniDriverFactory(
    base.$(labelledElementSelector),
  );
  const inputWrapperSelector = `[data-hook="${dataHooks.inputWithLabel}"]`;
  const inputDriver = inputUniDriverFactory(base.$(inputWrapperSelector));

  const dropdownLayoutDriver = dropdownLayoutDriverFactory(
    base.$(`[data-hook="${dataHooks.inputDropdownLayout}"]`),
  );
  return {
    ...baseUniDriverFactory(base),

    /**
     * Gets label text
     * @return {Promise<string>}
     */
    getLabelText: () => labelledElementDriver.getLabelText(),

    /**
     * Gets input value
     * @return {Promise<string>}
     */
    getValue: () => inputDriver.getValue(),

    /**
     * Enters given text to input
     * @param {string} text Text to input
     * @returns {Promise<void>}
     */
    enterText: async text => inputDriver.enterText(text),

    /**
     * Clicks an option at given index
     * @param {number} index Position of the option
     * @returns {Promise<void>}
     */
    clickAtOption: async index => {
      await inputDriver.click();
      return dropdownLayoutDriver.clickAtOption(index);
    },

    /**
     * Clicks an option with a given value
     * @param {string} value The option value
     * @returns {Promise<void>}
     */
    clickAtOptionWithValue: async value => {
      await inputDriver.click();
      return dropdownLayoutDriver.clickAtOptionWithValue(value);
    },

    /**
     * Clicks the menu arrow
     * @returns {Promise<void>}
     */
    clickMenuArrow: () => inputDriver.clickMenuArrow(),

    /**
     * Checks if input is disabled
     * @returns {Promise<boolean>}
     */
    isDisabled: async () => inputDriver.isDisabled(),

    /**
     * Triggers blur event on the input element
     * @returns {Promise<void>}
     */
    blur: () => inputDriver.blur(),

    /**
     * Checks whether there's a visible error icon
     * @return {Promise<boolean>}
     */
    hasError: () => inputDriver.hasStatus('error'),
  };
};
