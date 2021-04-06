import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { dataHooks } from './constants';

export const skeletonUniDriverFactory = (base, body) => {
  return {
    ...baseUniDriverFactory(base, body),

    /** return number of lines rendered */
    getNumLines: () => base.$$(`[data-hook="${dataHooks.line}"]`).count(),

    /** return boolean representing whether given spacing is rendered */
    hasSpacing: async spacing => (await base.attr('data-spacing')) === spacing,

    /** return boolean representing whether given list of sizes is rendered */
    hasSizes: async sizes => {
      const assertions = await base
        .$$(`[data-hook="${dataHooks.chunk}"]`)
        .map(
          async (chunkElement, i) =>
            (await chunkElement.attr('data-size')) === sizes[i],
        );

      return assertions.every(Boolean);
    },

    /** return boolean representing whether given alignment is rendered */
    hasAlignment: async alignment =>
      (await base.attr('data-alignment')) === alignment,
  };
};
