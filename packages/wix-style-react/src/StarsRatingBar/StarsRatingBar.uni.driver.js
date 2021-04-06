import { baseUniDriverFactory, countByHook } from '../../test/utils/unidriver';
import { dataHooks } from './constants';

export const starsRatingBarDriverFactory = (base, body) => {
  return {
    ...baseUniDriverFactory(base, body),

    /**
     * Selects a star rating bar value
     * @param {number} rating- The rating of that we want to select (a number between 1 to 5)
     * @returns {Promise<void>}
     */
    selectRating: async rating => base.$(`[data-index="${rating}"]`).click(),

    /**
     * Gets the selected rating (a number between 0 to 5)
     * @returns {Promise<number>}
     */
    getSelectedRating: async () => countByHook(base, dataHooks.filledStar),
  };
};
