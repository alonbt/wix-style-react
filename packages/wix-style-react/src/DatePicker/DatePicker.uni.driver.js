import { baseUniDriverFactory, findByHook } from '../../test/utils/unidriver';
import { calendarUniDriverFactory } from '../Calendar/Calendar.uni.driver.js';
import { testkit as inputUniDriverFactory } from '../Input/Input.uni.driver.js';
import { dataHooks } from './constants';

export const datePickerUniDriverFactory = (base, body) => {
  const calendarDriver = calendarUniDriverFactory(
    findByHook(base, dataHooks.datePickerCalendar),
    body,
  );
  const inputDriver = inputUniDriverFactory(
    findByHook(base, dataHooks.datePickerInput),
    body,
  );

  const driver = {
    exists: () => baseUniDriverFactory(base).exists(),
    open: async () => await inputDriver.click(),
    getWidth: () => base._prop('style').then(style => style.width),
  };
  // TODO: needs to be fixed, autodocs doesn't generate the docs below.
  return {
    /**
     * Input Unidriver methods
     */
    inputDriver,
    /**
     * Calender Unidriver methods
     */
    calendarDriver,
    /**
     * Checks whether the component found with the given data hook.
     * @returns {Promise<boolean>}
     */
    exists: driver.exists,
    /**
     * Contains 'exists', 'open' and 'getWidth' methods
     */
    driver,
  };
};
