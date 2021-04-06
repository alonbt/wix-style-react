import { funnelChartDriverFactory as publicDriverFactory } from '../FunnelChart.uni.driver';

export const funnelChartPrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),

    // Add here driver methods that considered "private"
  };
};
