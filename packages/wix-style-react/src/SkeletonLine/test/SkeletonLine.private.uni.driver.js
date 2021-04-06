import { skeletonLineDriverFactory as publicDriverFactory } from '../SkeletonLine.uni.driver';

export const skeletonLinePrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),

    // Add here driver methods that considered "private"
  };
};
