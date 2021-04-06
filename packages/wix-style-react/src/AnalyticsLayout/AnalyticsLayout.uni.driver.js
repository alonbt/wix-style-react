import { baseUniDriverFactory } from '../../test/utils/unidriver';

export const analyticsLayoutDriverFactory = (base, body) => {
  return {
    ...baseUniDriverFactory(base, body),
  };
};
