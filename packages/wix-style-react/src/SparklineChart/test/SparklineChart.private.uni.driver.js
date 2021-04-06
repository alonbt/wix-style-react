import { sparklineChartDriverFactory as publicDriverFactory } from '../SparklineChart.uni.driver';

export const sparklineChartPrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),

    // Add here driver methods that considered "private"
  };
};
