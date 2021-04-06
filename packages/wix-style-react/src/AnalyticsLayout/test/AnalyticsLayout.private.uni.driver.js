import { analyticsLayoutDriverFactory as publicDriverFactory } from '../AnalyticsLayout.uni.driver';

export const analyticsLayoutPrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),
  };
};
