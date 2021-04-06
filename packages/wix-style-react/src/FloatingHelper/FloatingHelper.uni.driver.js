import { closablePopoverUniDriverFactory } from './ClosablePopover/ClosablePopover.uni.driver';
import { floatingHelperContentUniDriverFactory } from './FloatingHelperContent/FloatingHelperContent.uni.driver';
import { dataHooks } from './constants';

const floatingHelperUniDriverFactory = (base, body) => {
  const closablePopoverUniDriver = closablePopoverUniDriverFactory(base, body);

  const popoverContent = () => closablePopoverUniDriver.getContentElement();
  const closeButton = () => body.$(`[data-hook="${dataHooks.closeButton}"]`);

  const contentWrapper = async () =>
    (await popoverContent()).querySelector(
      `[data-hook="${dataHooks.contentWrapper}"]`,
    );

  return {
    ...closablePopoverUniDriverFactory(base, body),

    /**
     * Check whether the helper has a close button
     * @return {Promise<boolean>}
     */
    hasCloseButton: async () => (await closeButton()).exists(),

    /**
     * Clicks the close button
     * @return {Promise<void>}
     */
    clickCloseButton: async () => (await closeButton()).click(),

    /**
     * Gets the driver for the helper's content
     * @return {Promise<any>}
     */
    getHelperContentDriver: () =>
      floatingHelperContentUniDriverFactory(base, body),

    /**
     * Gets the width of the content root element
     * @return {Promise<string>}
     */
    getWidth: async () => (await contentWrapper()).style.width,
  };
};

export default floatingHelperUniDriverFactory;
