import { tagListDriverFactory as publicDriverFactory } from '../TagList.uni.driver';

export const tagListPrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),

    // Add here driver methods that considered "private"
  };
};
