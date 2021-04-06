import { baseUniDriverFactory } from '../../test/utils/unidriver';
import { testkit } from '../Input/Input.uni.driver';
import { tickerDriverFactory } from '../Input/Ticker/Ticker.uni.driver';
import { dataHooks } from './constants';

export const timeInputUniDriverFactory = (base, body) => {
  const amPmIndicator = () =>
    base.$(`[data-hook="${dataHooks.amPmIndicator}"]`);
  const input = testkit(base.$(`[data-hook="${dataHooks.input}"]`), body);
  const inputTicker = tickerDriverFactory(base);

  return {
    ...baseUniDriverFactory(base),
    /**
     * Gets TimeInput value
     * @returns {Promise<string>}
     */
    getValue: async () => input.getValue(),
    /**
     * Checks if TimeInput is disabled
     * @returns {Promise<boolean>}
     */
    isDisabled: async () => input.isDisabled(),
    /**
     * Clicks on TimeInput up ticker
     * @returns {Promise<void>}
     */
    clickTickerUp: async () => inputTicker.clickUp(),
    /**
     * Clicks on TimeInput down ticker
     * @returns {Promise<void>}
     */
    clickTickerDown: async () => inputTicker.clickDown(),
    /**
     * Checks whether the AM/PM indicator/toggle exists
     * @returns {Promise<boolean>}
     */
    isAmPmIndicatorExist: async () => amPmIndicator().exists(),
    /**
     * Toggles AM/PM indicator
     * @returns {Promise<void>}
     */
    toggleAmPmIndicator: async () => amPmIndicator().click(),
    /**
     * Gets the AM/PM indicator text
     * @returns {Promise<string>}
     */
    getAmPmIndicatorText: async () => amPmIndicator().text(),
    /**
     * Gets the custom suffix
     * @returns {Promise<string>}
     */
    getCustomSuffix: () =>
      base.$(`[data-hook="${dataHooks.customSuffix}"]`)._prop('innerHTML'),
    /**
     * Checks if TimeInput is RTL
     * @returns {Promise<boolean>}
     */
    isRtl: async () => input.isRTL(),
    /**
     * Set value to display in the TimeInput
     * @param {string} value text value to input
     * @returns {Promise<void>}
     */
    setValue: async value => input.enterText(value),
    /**
     * Trigger blur on the TimeInput
     * @returns {Promise<void>}
     */
    blur: async () => input.blur(),
    /**
     * Checks if TimeInput displayed with seconds
     * @returns {Promise<boolean>}
     */
    isShowSeconds: async () =>
      input.getValue().then(result => result.length === 8),
    /**
     * Checks if TimeInput has status
     * @param {string} status status to check
     * @returns {Promise<boolean>}
     */
    hasStatus: status => input.hasStatus(status),
    /**
     * Gets TimeInput status message
     * @returns {Promise<string | null>}
     */
    getStatusMessage: () => input.getStatusMessage(),
  };
};
