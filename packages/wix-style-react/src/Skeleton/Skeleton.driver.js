import { dataHooks } from './constants';

const selector = element => hook =>
  element.querySelectorAll(`[data-hook="${hook}"]`);

export default ({ element }) => {
  const byHook = selector(element);

  return {
    exists: () => !!element,

    /** return number of lines rendered */
    getNumLines: () => byHook(dataHooks.line).length,

    /** return boolean representing whether given spacing is rendered */
    hasSpacing: spacing => element.getAttribute('data-spacing') === spacing,

    /** return boolean representing whether given list of sizes is rendered */
    hasSizes: sizes => {
      const [assertions] = Array.from(byHook(dataHooks.chunk)).reduce(
        ([result, [expectedSize, ...restSizes]], chunkElement) => [
          result.concat(
            chunkElement.getAttribute('data-size') === expectedSize,
          ),
          restSizes,
        ],
        [[], sizes],
      );

      return assertions.every(Boolean);
    },

    /** return boolean representing whether given alignment is rendered */
    hasAlignment: alignment =>
      element.getAttribute('data-alignment') === alignment,
  };
};
