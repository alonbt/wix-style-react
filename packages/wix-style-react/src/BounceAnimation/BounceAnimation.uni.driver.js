import { animateDriverFactory } from '../Animate/Animate.uni.driver';

export const bounceAnimationDriverFactory = (base, body) => {
  return {
    ...animateDriverFactory(base, body),
  };
};
