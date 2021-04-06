import { pulseAnimationDriverFactory as publicDriverFactory } from '../PulseAnimation.uni.driver';

export const pulseAnimationPrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),

    // Add here driver methods that considered "private"
  };
};
