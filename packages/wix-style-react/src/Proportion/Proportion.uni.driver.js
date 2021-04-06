import { baseUniDriverFactory } from '../../test/utils/unidriver';

export const proportionDriverFactory = base => {
  const byHook = dataHook => base.$(`[data-hook="${dataHook}"]`);

  return {
    ...baseUniDriverFactory(base),

    /**
     * Gets the component's aspect ratio
     * @returns {Promise<number>}
     */
    getAspectRatio: async () => {
      const width = await base.attr('offsetWidth');
      const height = await base.attr('offsetHeight');
      return width / height;
    },

    /**
     * Checks whether aspect ratio is disabled
     * @returns {Promise<boolean>}
     */
    isAspectRatioDisabled: async () => byHook('proportion-aspect').exists(),
  };
};
