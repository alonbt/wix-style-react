import { verticalTabsDriverFactory as publicDriverFactory } from '../VerticalTabs.uni.driver';

export const verticalTabsPrivateDriverFactory = base => {
  return {
    ...publicDriverFactory(base),

    // Add here driver methods that considered "private"
  };
};
