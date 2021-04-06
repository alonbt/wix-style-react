import { statusIndicatorDriverFactory as publicDriverFactory } from '../StatusIndicator.uni.driver';

export const statusIndicatorPrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),
  };
};
