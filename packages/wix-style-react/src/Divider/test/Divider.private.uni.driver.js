import { dividerDriverFactory as publicDriverFactory } from '../Divider.uni.driver';

export const dividerPrivateDriverFactory = base => {
  return {
    ...publicDriverFactory(base),

    // Add here driver methods that considered "private"
  };
};
