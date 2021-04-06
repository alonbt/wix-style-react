import { imageDriverFactory as publicDriverFactory } from '../Image.uni.driver';

export const imagePrivateDriverFactory = base => {
  return {
    ...publicDriverFactory(base),

    // Add here driver methods that considered "private"
  };
};
