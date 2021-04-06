import publicDriverFactory from '../BarChart.uni.driver';

export const barChartPrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),

    // Add here driver methods that considered "private"
  };
};
