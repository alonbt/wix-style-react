import { areaChartDriverFactory as publicDriverFactory } from '../AreaChart.uni.driver';

export const areaChartPrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),

    // Add here driver methods that considered "private"
  };
};
