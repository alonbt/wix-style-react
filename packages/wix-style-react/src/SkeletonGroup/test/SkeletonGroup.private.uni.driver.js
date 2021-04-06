import { skeletonGroupDriverFactory as publicDriverFactory } from '../SkeletonGroup.uni.driver';

export const skeletonGroupPrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),

    // Add here driver methods that considered "private"
  };
};
