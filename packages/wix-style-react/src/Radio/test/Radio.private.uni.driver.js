import { radioUniDriverFactory as publicDriverFactory } from '../Radio.uni.driver';

export const radioPrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),
  };
};
