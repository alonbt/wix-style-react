import { badgeSelectUniDriverFactory } from './BadgeSelect.uni.driver';
import { badgeUniDriverFactory } from '../Badge/Badge.uni.driver';
import { popoverDriverFactory } from '../Popover/Popover.uni.driver';
import * as DATA_ATTR from './DataAttr';

export const badgeSelectPrivateUniDriverFactory = (base, body) => {
  const popoverDriver = popoverDriverFactory(base, body);
  const badgeDriver = badgeUniDriverFactory(
    base.$(`[data-hook="${DATA_ATTR.DATA_BADGE}"]`),
  );

  const driver = {
    ...badgeSelectUniDriverFactory(base, body).driver,

    /** Performs a click outside the component */
    clickOutside: popoverDriver.clickOutside,

    /** Whether the dropdown is shown */
    isDropdownShown: popoverDriver.isContentElementExists,
  };

  return {
    driver,
    badgeDriver,
  };
};
