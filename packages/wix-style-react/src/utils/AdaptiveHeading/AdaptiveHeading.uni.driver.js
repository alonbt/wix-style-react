import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import DataHooks from './dataHooks';

export const adaptiveHeadingDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),

    /** Get short version of text */
    getShortText: async () => {
      const short = await base.$(`[data-hook="${DataHooks.textInShort}"]`);

      if (await short.exists()) {
        const text = await short.text();
        return text || null;
      }

      return null;
    },

    /** Get long version of text */
    getText: async () => {
      const long = await base.$(`[data-hook="${DataHooks.text}"]`);

      if (await long.exists()) {
        const text = await long.text();
        return text || null;
      }

      return base.text();
    },

    /** Get tagName */
    getAppearance: async () => base._prop('tagName'),
  };
};
