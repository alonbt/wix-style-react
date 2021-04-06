import { baseUniDriverFactory } from '../../test/utils/unidriver';
import { buttonNextDriverFactory } from 'wix-ui-core/dist/src/components/button-next/button-next.uni.driver';

export const buttonDriverFactory = base => {
  const buttonNextDriver = buttonNextDriverFactory(base);

  return {
    ...baseUniDriverFactory(base),

    /**
     * Gets button text
     * @return {Promise<string>}
     */
    getButtonTextContent: buttonNextDriver.getButtonTextContent,

    /**
     * Checks whether button is focused
     * @return {Promise<boolean>}
     */
    isFocused: buttonNextDriver.isFocused,

    /**
     * Checks whether button is disabled
     * @return {Promise<boolean>}
     */
    isButtonDisabled: buttonNextDriver.isButtonDisabled,

    /**
     * Checks whether button has a given skin
     * @param {string} skinName The button skin
     * @return {Promise<boolean>}
     */
    hasSkin: async skinName => (await base.attr(`data-skin`)) === skinName,

    /**
     * Checks whether button has an icon prefix
     * @return {Promise<boolean>}
     */
    isPrefixIconExists: buttonNextDriver.isPrefixIconExists,

  /**
     * Checks whether button has an icon suffix
     * @return {Promise<boolean>}
     */
    isSuffixIconExists: buttonNextDriver.isSuffixIconExists,

  };
};
