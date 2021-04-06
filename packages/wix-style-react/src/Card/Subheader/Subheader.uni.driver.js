import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

export const cardSubheaderDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),
    /** Get the title text */
    title: async () => base.$('[data-hook="title"]').text(),
    /** Get the title node */
    titleNode: async () => base.$('[data-hook="title-node"] > *'),
    /** Get the suffix node */
    suffixNode: async () => base.$(`[data-hook="suffix-node"] > *`),
  };
};
