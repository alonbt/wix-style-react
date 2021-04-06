import { baseUniDriverFactory, findByHook } from '../../test/utils/unidriver';
import { dropdownBaseDriverFactory } from '../DropdownBase/DropdownBase.uni.driver';
import inputDriverFactory from '../Input/Input.uni.driver';
import { dataHooks } from './constants';

export const timeInputWipDriverFactory = (base, body) => {
  const dropdownBaseTestkit = dropdownBaseDriverFactory(base, body);
  const input = findByHook(base, dataHooks.timeInputWipInput);
  const inputDriver = inputDriverFactory(input);

  return {
    ...baseUniDriverFactory(base, body),

    /**
     * Gets the date value
     * @returns {Promise<Date>}
     */
    getValue: async () => {
      await inputDriver.click();
      const isDropdownShown = await dropdownBaseTestkit.isDropdownShown();
      const isInputDisabled = await inputDriver.isDisabled();
      if (isDropdownShown && !isInputDisabled) {
        const dateMs = await dropdownBaseTestkit.getSelectedOptionId();
        if (dateMs) {
          return Number(dateMs);
        }
      }
      return null;
    },

    /**
     * Gets the date value as string
     * @returns {Promise<string>}
     */
    getStringValue: () => inputDriver.getValue(),
  };
};
