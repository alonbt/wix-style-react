import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { dataHooks } from './constants';

export const listItemSelectDriverFactory = base => {
  const byDataHook = dataHook => base.$(`[data-hook="${dataHook}"]`);

  return {
    ...baseUniDriverFactory(base),

    /** Check whether the checkbox appears */
    hasCheckbox: async () => await byDataHook(dataHooks.CHECKBOX).exists(),

    /** Get prefix */
    getPrefix: () => byDataHook(dataHooks.PREFIX),

    /** Get title Text */
    getTitle: async () => await byDataHook(dataHooks.TITLE).text(),

    /** Get subtitle Text */
    getSubtitle: async () => {
      const subtitleElement = await byDataHook(dataHooks.SUBTITLE);
      if (await subtitleElement.exists()) {
        return subtitleElement.text();
      }
    },

    /** Get suffix */
    getSuffix: () => byDataHook(dataHooks.SUFFIX),
  };
};
