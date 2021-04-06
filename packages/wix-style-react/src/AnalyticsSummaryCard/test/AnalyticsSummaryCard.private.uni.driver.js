import { analyticsSummaryCardDriverFactory as publicDriverFactory } from '../AnalyticsSummaryCard.uni.driver';

export const analyticsSummaryCardPrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),

    // Add here driver methods that considered "private"
  };
};
