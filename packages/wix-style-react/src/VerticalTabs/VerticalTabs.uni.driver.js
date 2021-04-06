import { baseUniDriverFactory } from '../../test/utils/unidriver';

export const verticalTabsDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),
  };
};
