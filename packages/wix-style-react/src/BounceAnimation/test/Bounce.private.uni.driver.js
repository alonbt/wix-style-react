import { bounceDriverFactory as publicDriverFactory } from '../BounceAnimation.uni.driver';

export const bouncePrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),

    // Add here driver methods that considered "private"
  };
};
