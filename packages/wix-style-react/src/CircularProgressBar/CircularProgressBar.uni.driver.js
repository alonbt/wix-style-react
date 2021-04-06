import { tooltipDriverFactory as tooltipUniDriverFactory } from 'wix-ui-core/dist/src/components/tooltip/Tooltip.uni.driver';
import { circularProgressBarUniDriverFactory as coreCircularProgressBarUniDriverFactory } from 'wix-ui-core/dist/src/components/circular-progress-bar/CircularProgressBar.uni.driver';
import { baseUniDriverFactory } from '../../test/utils/unidriver';
import { dataHooks } from './constants';

export const circularProgressBarDriverFactory = (base, body) => {
  const tooltip = base.$(`[data-hook="${dataHooks.tooltip}"]`);

  const createTooltipDriver = () => tooltipUniDriverFactory(tooltip, body);
  const coreProgressBarDriver = coreCircularProgressBarUniDriverFactory(base);

  const errorIcon = base => base.$(`[data-hook=${dataHooks.errorIcon}]`);
  const successIcon = base => base.$(`[data-hook=${dataHooks.successIcon}]`);
  const progressBar = base =>
    base.$(`[data-hook=${dataHooks.circularProgressBar}]`);

  const getTooltip = () => createTooltipDriver();

  return {
    ...baseUniDriverFactory(base),
    /**
     * Checks whether the success icon is displayed
     * @returns {Promise<boolean>}
     * */
    isSuccessIconDisplayed: coreProgressBarDriver.isSuccessIconDisplayed,
    /**
     * Checks whether the error icon is displayed
     * @returns {Promise<boolean>}
     * */
    isErrorIconDisplayed: coreProgressBarDriver.isErrorIconDisplayed,
    /**
     * Checks whether the label text is displayed
     * @returns {Promise<boolean>}
     * */
    isLabelDisplayed: coreProgressBarDriver.isLabelDisplayed,
    /**
     * Gets the text content displayed
     * @returns {Promise<string>}
     */
    getLabelTextContent: coreProgressBarDriver.getLabelTextContent,
    /**
     * Checks whether the progress percentages are displayed
     * @returns {Promise<boolean>}
     */
    isPercentagesProgressDisplayed:
      coreProgressBarDriver.isPercentagesProgressDisplayed,
    /**
     * Gets the progress percentages value
     * @returns {Promise<string>}
     */
    getValue: coreProgressBarDriver.getValue,
    /**
     * Checks whether the progress completed (value is 100)
     * @returns {Promise<boolean>}
     */
    isCompleted: coreProgressBarDriver.isCompleted,
    /**
     * Checks whether an error occurred
     * @returns {Promise<boolean>}
     */
    hasError: coreProgressBarDriver.hasError,
    /**
     * Checks whether error icon is shown
     * @returns {Promise<boolean>}
     * */
    isErrorIconShown: () => errorIcon(base).exists(),
    /**
     * Checks whether success icon is shown
     * @returns {Promise<boolean>}
     * */
    isSuccessIconShown: () => successIcon(base).exists(),
    /**
     * Gets size.
     * @returns {Promise<string>}
     * */
    getSize: () => progressBar(base).attr('data-size'),
    /**
     * Gets the tooltip error message
     * @returns {Promise<string>}
     * */
    getTooltipErrorMessage: () => getTooltip().getTooltipText(),
  };
};
