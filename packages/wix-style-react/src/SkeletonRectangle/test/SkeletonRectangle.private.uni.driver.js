import { skeletonRectangleDriverFactory as publicDriverFactory } from '../SkeletonRectangle.uni.driver';

export const skeletonRectanglePrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),

    // Add here driver methods that considered "private"
  };
};
