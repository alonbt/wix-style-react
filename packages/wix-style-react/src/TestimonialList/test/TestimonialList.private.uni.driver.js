import { testimonialListDriverFactory as publicDriverFactory } from '../TestimonialList.uni.driver';

export const testimonialListPrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),

    // Add here driver methods that considered "private"
  };
};
