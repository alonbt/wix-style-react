import { numberInputDriverFactory as publicDriverFactory } from './NumberInput.uni.driver';

export const numberInputPrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),

    // Add here driver methods that considered "private"
  };
};
