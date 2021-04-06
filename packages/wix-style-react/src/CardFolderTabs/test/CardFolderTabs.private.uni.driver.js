import { cardFolderTabsDriverFactory as publicDriverFactory } from '../CardFolderTabs.uni.driver';

export const cardFolderTabsPrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),

    // Add here driver methods that considered "private"
  };
};
