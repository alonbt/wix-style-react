import { findByHook } from '../../../test/utils/unidriver';
import { dropdownBaseDriverFactory } from '../../DropdownBase/DropdownBase.uni.driver';
import inputDriverFactory from '../../Input/Input.uni.driver';
import { timeInputWipDriverFactory as publicDriverFactory } from '../TimeInputWip.uni.driver';
import { dataHooks } from '../constants';

export const timeInputWipPrivateDriverFactory = (base, body) => {
  const dropdownBaseTestkit = dropdownBaseDriverFactory(base, body);
  const input = findByHook(base, dataHooks.timeInputWipInput);
  const inputDriver = inputDriverFactory(input);

  return {
    ...publicDriverFactory(base, body),

    selectOptionAt: async index => {
      await inputDriver.click();
      const isDropdownShown = await dropdownBaseTestkit.isDropdownShown();
      const isInputDisabled = await inputDriver.isDisabled();
      if (isDropdownShown && !isInputDisabled) {
        await dropdownBaseTestkit.selectOption(index);
      }
    },
  };
};
