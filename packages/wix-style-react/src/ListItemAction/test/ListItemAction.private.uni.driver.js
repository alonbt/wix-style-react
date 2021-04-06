import { ListItemActionDriverFactory as publicDriverFactory } from '../ListItemAction.uni.driver';

export const ListItemActionPrivateDriverFactory = base => {
  return {
    ...publicDriverFactory(base),

    // Add here driver methods that considered "private"
  };
};
