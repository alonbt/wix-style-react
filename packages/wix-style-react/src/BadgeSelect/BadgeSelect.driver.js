import badgeDriverFactory from '../Badge/Badge.driver';
import * as DATA_ATTR from './DataAttr';

import dropdownLayoutDriverFactory from '../DropdownLayout/DropdownLayout.driver';
import popoverDriverFactory from '../Popover/Popover.driver';

const badgeSelectDriverFactory = ({ element, eventTrigger }) => {
  const popoverDriver = popoverDriverFactory({ element, eventTrigger });

  return {
    /** Returns 'true' whether the element exists */
    exists: () => !!element,

    /** Click on an option */
    clickAtOption: index => {
      if (!popoverDriver.isContentElementExists()) {
        const badgeDriver = badgeDriverFactory({
          element: element.querySelector(
            `[data-hook="${DATA_ATTR.DATA_BADGE}"]`,
          ),
          eventTrigger,
        });

        badgeDriver.click();
      }

      // Since the popover may be closed, we need to create the DropdownLayout driver every time
      const dropdownLayoutDriver = dropdownLayoutDriverFactory({
        element: popoverDriver
          .getContentElement()
          .querySelector(`[data-hook="${DATA_ATTR.DATA_DROPDOWN}"]`),
      });

      if (dropdownLayoutDriver.exists()) {
        dropdownLayoutDriver.clickAtOption(index);
      }
    },
  };
};

export default badgeSelectDriverFactory;
