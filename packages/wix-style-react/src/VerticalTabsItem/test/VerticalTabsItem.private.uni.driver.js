import { verticalTabsItemDriverFactory as publicDriverFactory } from '../VerticalTabsItem.uni.driver';

export const verticalTabsItemPrivateDriverFactory = base => {
  return {
    ...publicDriverFactory(base),

    // Add here driver methods that considered "private"
  };
};
