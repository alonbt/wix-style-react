import { stackedBarChartDriverFactory as publicDriverFactory } from '../StackedBarChart.uni.driver';

export const stackedBarChartPrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),

    // Add here driver methods that considered "private"
  };
};
