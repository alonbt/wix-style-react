import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

export const verticalTabsItemDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),

    /** Get the item's text */
    getText: async () => base.$('[data-hook="vertical-tabs-item-text"]').text(),
  };
};
