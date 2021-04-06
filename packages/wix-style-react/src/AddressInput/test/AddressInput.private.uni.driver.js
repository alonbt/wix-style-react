import { addressInputDriverFactory as publicDriverFactory } from '../AddressInput.uni.driver';
import { inputWithOptionsUniDriverFactory } from '../../InputWithOptions/InputWithOptions.uni.driver';
import { loaderUniDriverFactory } from '../../Loader/Loader.uni.driver';
import { statusIndicatorDriverFactory } from '../../StatusIndicator/StatusIndicator.uni.driver';
import { dataHooks } from '../constants';
import { dataHooks as inputDataHooks } from '../../Input/constants';
import { findByHook } from '../../../test/utils/unidriver';

export const addressInputPrivateDriverFactory = (base, body) => {
  const { driver, dropdownLayoutDriver } = inputWithOptionsUniDriverFactory(
    base,
    body,
  );

  const loaderTestkit = () =>
    loaderUniDriverFactory(findByHook(base, dataHooks.loader));

  const statusIndicatorTestkit = () =>
    statusIndicatorDriverFactory(findByHook(base, inputDataHooks.status));

  return {
    ...publicDriverFactory(base, body),

    /** Get Options drivers */
    options: dropdownLayoutDriver.options,
    /** Returns textual content of option at given index
     * @param {number} position
     * @returns {Promise<string>}
     */
    optionContentAt: dropdownLayoutDriver.optionContentAt,

    /** Whether dropdown loader is shown
     * @returns {Promise<boolean>}
     */
    isDropdownLoaderShown: () => loaderTestkit().exists(),
    /** Whether loading indicator is shown in input
     * @returns {Promise<boolean>}
     */
    isLoadingIndicatorShown: async () => {
      try {
        const status = await statusIndicatorTestkit().getStatus();
        return status === 'loading';
      } catch {
        // Couldn't find StatusIndicator
        return false;
      }
    },

    /**
     * Press ArrowDown on address input
     * @returns {Promise<void>}
     */
    pressArrowDown: () => driver.pressKey('ArrowDown'),
  };
};
