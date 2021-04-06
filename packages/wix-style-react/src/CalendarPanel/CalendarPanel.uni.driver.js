import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { calendarUniDriverFactory } from '../Calendar/Calendar.uni.driver';
import { dropdownLayoutDriverFactory } from '../DropdownLayout/DropdownLayout.uni.driver';

export const calendarPanelUniDriverFactory = base => {
  const calendarElement = () => base.$('[data-hook=calendar]');
  const getCalendarDriver = async () =>
    calendarUniDriverFactory(calendarElement());
  const dropdownLayoutElement = () => base.$('[data-hook=dropdown-layout]');
  const dropdownLayoutDriver = () =>
    dropdownLayoutDriverFactory(dropdownLayoutElement());

  return {
    ...baseUniDriverFactory(base),
    calendarDriver: async () => getCalendarDriver(),
    presetsDropdownLayoutDriver: async () => dropdownLayoutDriver(),
    isDropdownExists: async () => dropdownLayoutElement().exists(),
    findByDataHook: async dataHook =>
      base.$(`[data-hook=${dataHook}]`).exists(),
  };
};
