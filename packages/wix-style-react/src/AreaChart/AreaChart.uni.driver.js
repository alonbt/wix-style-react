import { baseUniDriverFactory } from '../../test/utils/unidriver';

export const areaChartDriverFactory = (base, body) => {
  return {
    ...baseUniDriverFactory(base, body),
  };
};
