import { baseUniDriverFactory } from '../../test/utils/unidriver';

export const pageFooterDriverFactory = (base, body) => {
  return {
    ...baseUniDriverFactory(base, body),
  };
};
