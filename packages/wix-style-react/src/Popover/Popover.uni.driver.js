import { baseUniDriverFactory } from '../../test/utils/unidriver';
import { testkit } from 'wix-ui-core/dist/src/components/popover/Popover.uni.driver';

export const popoverDriverFactory = (base, body) => {
  const corePopoverTestkit = testkit(base, body);

  return {
    ...baseUniDriverFactory(base, body),

    /**
     * Clicks on the target element
     * @returns {Promise<void>}
     */
    click: corePopoverTestkit.click,

    /**
     * Gets the target element
     * @returns {Promise<any>}
     */
    getTargetElement: corePopoverTestkit.getTargetElement,

    /**
     * Gets the portal element
     * @returns {Promise<any>}
     */
    getPortalElement: corePopoverTestkit.getPortalElement,

    /**
     * Gets the content element
     * @returns {Promise<any>}
     */
    getContentElement: corePopoverTestkit.getContentElement,

    /**
     * Checks whether target element exists
     * @returns {Promise<boolean>}
     */
    isTargetElementExists: corePopoverTestkit.isTargetElementExists,

    /**
     * Checks whether content element exists
     * @returns {Promise<boolean>}
     */
    isContentElementExists: corePopoverTestkit.isContentElementExists,

    /**
     * Triggers a mouseEnter event
     * @returns {Promise<void>}
     */
    mouseEnter: corePopoverTestkit.mouseEnter,

    /**
     * Triggers a mouseLeave event
     * @returns {Promise<void>}
     */
    mouseLeave: corePopoverTestkit.mouseLeave,

    /**
     * Clicks outside the target element (triggers mouseDown and mouseUp events)
     * @returns {Promise<void>}
     */
    clickOutside: corePopoverTestkit.clickOutside,

    /**
     * Gets the arrow offset
     * @returns {Promise<any>}
     */
    getArrowOffset: corePopoverTestkit.getArrowOffset,
  };
};
