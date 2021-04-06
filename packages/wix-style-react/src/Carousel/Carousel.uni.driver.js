import { baseUniDriverFactory } from '../../test/utils/unidriver';

// It turns out that react-slick duplicates the children, so we ditch the cloned nodes
const withoutClonedNodes = (selector = '') =>
  `.slick-slide:not(.slick-cloned) ${selector}`;

export const carouselUniDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),

    /**
     * Checks whether the carousel is loading
     * @return {Promise<boolean>}
     */
    isLoading: async () => (await base.$$('[data-hook="loader"]').count()) > 0,

    /**
     * Gets children list elements
     * @return {UniDriverList}
     */
    getChildren: () => base.$$(withoutClonedNodes()).map(child => child),

    /**
     * Get a list of the carousel images
     * @return {Promise<Array<string | null>>}
     */
    getImages: () =>
      base
        .$$(withoutClonedNodes('[data-hook="carousel-img"]'))
        .map(img => img.attr('src')),

    /**
     * Click on the previous item button
     * @return {Promise<void>}
     */
    clickPrevious: () => base.$('[data-hook="prev-button"]').click(),

    /**
     * Click on the next item button
     * @return {Promise<void>}
     */
    clickNext: () => base.$('[data-hook="next-button"]').click(),
  };
};
