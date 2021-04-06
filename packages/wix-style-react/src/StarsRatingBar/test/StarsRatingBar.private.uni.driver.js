import { starsRatingBarDriverFactory as publicDriverFactory } from '../StarsRatingBar.uni.driver';
import { findByHook } from '../../../test/utils/unidriver';
import { dataHooks } from '../constants';

export const starsRatingBarPrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),

    /**
     * Gets the displayed caption label
     * @returns {Promise<string>}
     */
    getDisplayedRateCaptionLabel: async () =>
      await findByHook(base, dataHooks.ratingCaption).text(),

    /**
     * Checks whether rating caption exist
     * @returns {Promise<boolean>}
     */
    isRatingCaptionExists: async () =>
      await findByHook(base, dataHooks.ratingCaption).exists(),

    /**
     * Hovers on a star
     * @param {number} id - The id of the star to hover on
     * @returns {Promise<void>}
     */
    hoverOnStar: async id => await base.$(`[data-index="${id}"]`).hover(),
  };
};
