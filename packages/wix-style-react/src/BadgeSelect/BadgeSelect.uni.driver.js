import { baseUniDriverFactory, findByHook } from '../../test/utils/unidriver';
import { badgeUniDriverFactory } from '../Badge/Badge.uni.driver';
import { popoverDriverFactory } from '../Popover/Popover.uni.driver';
import * as DATA_ATTR from './DataAttr';
import { dropdownLayoutDriverFactory } from '../DropdownLayout/DropdownLayout.uni.driver';
import { CommonDriver } from 'wix-ui-core/dist/src/components/popover/Popover.common.uni.driver';

export const badgeSelectUniDriverFactory = (base, body) => {
  const popoverDriver = popoverDriverFactory(base, body);
  const badgeDriver = badgeUniDriverFactory(
    findByHook(base, DATA_ATTR.DATA_BADGE),
  );

  const driver = {
    ...baseUniDriverFactory(base),

    exists: () => popoverDriver.exists(),

    clickAtOption: async index => {
      await badgeDriver.click();
      const popoverCommonTestkit = () => CommonDriver(base, body);
      const contentElement = await popoverCommonTestkit().getContentElement();
      const dropdownLayoutDriver = dropdownLayoutDriverFactory(
        contentElement.$(`[data-hook="${DATA_ATTR.DATA_DROPDOWN}"]`),
      );

      await dropdownLayoutDriver.clickAtOption(index);
    },
  };

  // For AutoDocs only
  const spreadDriver = {
    ...baseUniDriverFactory(base),

    /**
     * Gets root element innerHTML
     * @return {Promise<HTMLElement>}
     */
    getContent: badgeDriver.getContent,

    /**
     * Gets badge text
     * @return {Promise<string>}
     */
    text: badgeDriver.text,

    /**
     * Gets badge type
     * @return {Promise<'solid' | 'outlined' | 'transparent'>}
     */
    getType: badgeDriver.getType,

    /**
     * Gets badge type
     * @return {Promise<'general' | 'standard' | 'danger' | 'success' | 'neutral' | 'neutralLight' | 'warning' | 'warningLight' | 'urgent' | 'neutralStandard' | 'neutralSuccess' | 'neutralDanger' | 'premium'>}
     */
    getSkin: badgeDriver.getSkin,

    /**
     * Gets badge size
     * @return {Promise<'medium' | 'small'>}
     */
    getSize: badgeDriver.getSize,

    /**
     * Checks whether the text is uppercase
     * @return {Promise<boolean>}
     */
    isUppercase: badgeDriver.isUppercase,

    /**
     * Checks whether badge is clickable
     * @return {Promise<boolean>}
     */
    hasClickCursor: badgeDriver.hasClickCursor,

    /**
     * Clicks an option at given index
     * @param {number} index Position of the option
     * @returns {Promise<void>}
     */
    clickAtOption: driver.clickAtOption,
  };

  return {
    driver, // For backwards compatibility
    badgeDriver, // For backwards compatibility

    ...spreadDriver,
  };
};
