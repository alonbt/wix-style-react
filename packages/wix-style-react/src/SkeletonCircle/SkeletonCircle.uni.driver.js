import { baseUniDriverFactory, findByHook } from '../../test/utils/unidriver';

export const skeletonCircleDriverFactory = (base, body) => {
  return {
    ...baseUniDriverFactory(base, body),

    /**
     * Gets the diameter
     * @returns {Promise<string>}
     */
    getDiameter: () => base.attr('data-diameter'),

    /**
     * Gets the skin
     * @returns {Promise<string>}
     */
    getSkin: () => base.attr('data-skin'),
  };
};
