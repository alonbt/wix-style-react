import { inputWithLabelDriverFactory as publicDriverFactory } from '../InputWithLabel.uni.driver';

export const inputWithLabelPrivateDriverFactory = base => {
  return {
    ...publicDriverFactory(base),

    // Add here driver methods that considered "private"
  };
};
