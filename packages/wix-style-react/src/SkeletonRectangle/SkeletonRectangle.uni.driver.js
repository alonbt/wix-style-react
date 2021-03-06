import { baseUniDriverFactory, findByHook } from '../../test/utils/unidriver';

export const skeletonRectangleDriverFactory = (base, body) => {
  return {
    ...baseUniDriverFactory(base, body),

    /**
     * Gets the width
     * @returns {Promise<string>}
     */
    getWidth: () => base.attr('data-width'),

    /**
     * Gets the height
     * @returns {Promise<string>}
     */
    getHeight: () => base.attr('data-height'),
    /**
     * Gets the skin
     * @returns {Promise<string>}
     */
    getSkin: () => base.attr('data-skin'),
  };
};
