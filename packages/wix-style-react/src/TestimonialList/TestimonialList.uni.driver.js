import {
  baseUniDriverFactory,
  findByHook,
  countByHook,
} from '../../test/utils/unidriver';
import { dataHooks } from './constants';
import { textUniDriverFactory } from '../Text/Text.uni.driver';

export const testimonialListDriverFactory = (base, body) => {
  return {
    ...baseUniDriverFactory(base, body),

    /**
     * Gets the number of the testimonials that exist in the footer
     * @returns {Promise<number>}
     */
    getNumberOfTestimonials: async () =>
      countByHook(base, dataHooks.testimonial),

    /**
     * Checks whether testimonial's avatar exist
     * @param {number} testimonialIndex - the index of the testimonial in the testimonials array (starts from 0).
     * @returns {Promise<boolean>}
     */
    hasTestimonialAvatar: async testimonialIndex =>
      await findByHook(
        base,
        `${dataHooks.testimonialAvatar}${testimonialIndex}`,
      ).exists(),

    /**
     * Checks whether testimonial's text exist
     * @param {number} testimonialIndex - the index of the testimonial in the testimonials array (starts from 0).
     * @returns {Promise<boolean>}
     */
    hasTestimonialText: async testimonialIndex =>
      await findByHook(
        base,
        `${dataHooks.testimonialText}${testimonialIndex}`,
      ).exists(),

    /**
     * Gets the testimonial's text
     * @param {number} testimonialIndex - the index of the testimonial in the testimonials array (starts from 0).
     * @returns {Promise<string>}
     */
    getTestimonialText: async testimonialIndex =>
      (
        await textUniDriverFactory(
          await findByHook(
            base,
            `${dataHooks.testimonialText}${testimonialIndex}`,
          ),
        )
      ).getText(),

    /**
     * Checks whether testimonial's author name exist
     * @param {number} testimonialIndex - the index of the testimonial in the testimonials array (starts from 0).
     * @returns {Promise<boolean>}
     */
    hasTestimonialAuthorName: async testimonialIndex =>
      await findByHook(
        base,
        `${dataHooks.testimonialAuthorName}${testimonialIndex}`,
      ).exists(),

    /**
     * Gets the testimonial's author name
     * @param {number} testimonialIndex - the index of the testimonial in the testimonials array (starts from 0).
     * @returns {Promise<string>}
     */
    getTestimonialAuthorName: async testimonialIndex =>
      (
        await textUniDriverFactory(
          await findByHook(
            base,
            `${dataHooks.testimonialAuthorName}${testimonialIndex}`,
          ),
        )
      ).getText(),
  };
};
