import { baseUniDriverFactory, findByHook } from '../../test/utils/unidriver';
import { inputWithOptionsUniDriverFactory } from '../InputWithOptions/InputWithOptions.uni.driver';
import { loaderUniDriverFactory } from '../Loader/Loader.uni.driver';
import { statusIndicatorDriverFactory } from '../StatusIndicator/StatusIndicator.uni.driver';
import { addressInputItemDriverFactory } from '../AddressInputItem/AddressInputItem.uni.driver';
import { dataHooks } from './constants';
import { dataHooks as inputDataHooks } from '../Input/constants';

export const addressInputDriverFactory = (base, body) => {
  const {
    driver,
    inputDriver,
    dropdownLayoutDriver,
  } = inputWithOptionsUniDriverFactory(base, body);

  const getItemDriverAt = async index => {
    const optionDrivers = await dropdownLayoutDriver.options();
    const item = await optionDrivers[index].element();
    return addressInputItemDriverFactory(item);
  };

  const loaderTestkit = () =>
    loaderUniDriverFactory(findByHook(base, dataHooks.loader));

  const statusIndicatorTestkit = () =>
    statusIndicatorDriverFactory(findByHook(base, inputDataHooks.status));

  const isDropdownLoaderShown = () => loaderTestkit().exists();
  const isLoadingIndicatorShown = async () => {
    try {
      const status = await statusIndicatorTestkit().getStatus();
      return status === 'loading';
    } catch {
      // Couldn't find StatusIndicator
      return false;
    }
  };

  return {
    ...baseUniDriverFactory(base, body),

    /**
     * Returns value of the input
     * @returns {Promise<string>}
     */
    getInputValue: () => inputDriver.getValue(),

    /**
     * Enters given text to input
     * @param {string} text Text to input
     * @returns {Promise<void>}
     */
    enterText: text => inputDriver.enterText(text),

    /**
     * Clicks on the clear button to clear input text
     * @returns {Promise<void>}
     */
    clickClear: () => inputDriver.clickClear(),

    /**
     * Checks if input is disabled
     * @returns {Promise<boolean>}
     */
    isDisabled: () => driver.isDisabled(),

    /**
     * Clicks an option at given index
     * @param {number} index Position of the option
     * @returns {Promise<void>}
     */
    clickAtOption: index => dropdownLayoutDriver.clickAtOption(index),

    /**
     * Clicks an option with a given value
     * @param {string} value The option value
     * @returns {Promise<void>}
     */
    clickAtOptionWithValue: value =>
      dropdownLayoutDriver.clickAtOptionWithValue(value),

    /** Whether loader is shown
     * @returns {Promise<boolean>}
     */
    isLoading: async () =>
      (await isLoadingIndicatorShown()) || (await isDropdownLoaderShown()),

    /**
     * Clicks on input
     * @returns {Promise<void>}
     */
    clickInput: () => inputDriver.click(),

    /**
     * Gets amount of dropdown items
     * @returns {Promise<number>}
     */
    getAmountOfItems: () => dropdownLayoutDriver.optionsLength(),

    /**
     * Gets item main label text at given index
     * @param {number} index
     * @returns {Promise<string>}
     */
    getItemMainLabelAt: async index =>
      (await getItemDriverAt(index)).getMainLabelText(),

    /**
     * Gets item secondary label text at given index
     * @param {number} index
     * @returns {Promise<string>}
     */
    getItemSecondaryLabelAt: async index =>
      (await getItemDriverAt(index)).getSecondaryLabelText(),

    /**
     * Press enter on address input
     * @returns {Promise<void>}
     */
    pressEnter: () => driver.pressKey('Enter'),
  };
};
