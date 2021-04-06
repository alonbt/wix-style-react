import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { toggleButtonDriverFactory } from '../ToggleButton/ToggleButton.uni.driver.js';

const getToggleButtonDriver = async (base, body, itemId) => {
  const item = await base.$(`[data-hook="composer-sidebar-item-${itemId}"]`);
  return toggleButtonDriverFactory(item, body);
};

export const composerSidebarDriverFactory = (base, body) => {
  return {
    ...baseUniDriverFactory(base, body),

    /** returns selected item id */
    getSelectedItemId: async () =>
      await base
        .$('[data-hook="composer-sidebar-items-container"]')
        .attr('data-selected-id'),

    /** returns true if item is disabled */
    isItemDisabled: async itemId => {
      const toggleButtonDriver = await getToggleButtonDriver(
        base,
        body,
        itemId,
      );
      return toggleButtonDriver.isButtonDisabled();
    },

    /** clicks on given item by id */
    clickOnItem: async itemId => {
      const toggleButtonDriver = await getToggleButtonDriver(
        base,
        body,
        itemId,
      );
      return toggleButtonDriver.click();
    },

    /** returns item label value by id */
    getItemLabel: async itemId => {
      const toggleButtonDriver = await getToggleButtonDriver(
        base,
        body,
        itemId,
      );
      return toggleButtonDriver.getLabelValue();
    },
  };
};
