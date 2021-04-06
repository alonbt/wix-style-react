import { baseUniDriverFactory, findByHook } from '../../test/utils/unidriver';

export const skeletonGroupDriverFactory = (base, body) => {
  return {
    ...baseUniDriverFactory(base, body),
  };
};
