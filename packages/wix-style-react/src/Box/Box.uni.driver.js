import { baseUniDriverFactory } from '../../test/utils/unidriver';

export const boxDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),
  };
};
