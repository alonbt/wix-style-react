import { trendIndicatorDriverFactory as publicDriverFactory } from '../TrendIndicator.uni.driver';

export const trendIndicatorPrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),

    // Add here driver methods that considered "private"
  };
};
