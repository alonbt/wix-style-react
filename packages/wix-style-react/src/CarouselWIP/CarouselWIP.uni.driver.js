import { baseUniDriverFactory } from '../../test/utils/unidriver';
import { DATA_HOOKS } from './constants';

export const carouselWIPUniDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),

    /**
     * Checks whether the carousel is loading
     * @return {Promise<boolean>}
     */
    isLoading: async () =>
      (await base.$$(`[data-hook="${DATA_HOOKS.loader}"]`).count()) > 0,

    /**
     * Gets children list elements
     * @return {UniDriverList}
     */
    getChildren: () =>
      base.$$(`[data-hook="${DATA_HOOKS.child}"]`).map(child => child),

    /**
     * Get a list of the carousel images
     * @return {Promise<Array<string | null>>}
     */
    getImages: () =>
      base
        .$$(`[data-hook="${DATA_HOOKS.carouselImage}"]`)
        .map(img => img.attr('src')),

    /**
     * Click on the previous item button
     * @return {Promise<void>}
     */
    clickPrevious: () =>
      base.$(`[data-hook="${DATA_HOOKS.prevButton}"]`).click(),

    /**
     * Click on the next item button
     * @return {Promise<void>}
     */
    clickNext: () => base.$(`[data-hook="${DATA_HOOKS.nextButton}"]`).click(),
  };
};
