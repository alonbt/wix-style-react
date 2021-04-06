import { baseUniDriverFactory } from '../../test/utils/unidriver';

export const animateDriverFactory = (base, body) => {
  return {
    ...baseUniDriverFactory(base, body),
  };
};
