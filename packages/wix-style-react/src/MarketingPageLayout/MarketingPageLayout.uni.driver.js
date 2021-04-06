import { baseUniDriverFactory, findByHook } from '../../test/utils/unidriver';
import { dataHooks } from './constants';

export const marketingPageLayoutDriverFactory = (base, body) => {
  return {
    ...baseUniDriverFactory(base, body),
    /**
     * Checks whether MarketingPageLayout content exist
     * @returns {Promise<boolean>}
     */
    hasContent: async () =>
      findByHook(base, dataHooks.contentContainer).exists(),

    /**
     * Checks whether MarketingPageLayout image exist
     * @returns {Promise<boolean>}
     */
    hasImage: async () => findByHook(base, dataHooks.imageContainer).exists(),

    /**
     * Checks whether MarketingPageLayout footer exist
     * @returns {Promise<boolean>}
     */
    hasFooter: async () => findByHook(base, dataHooks.footerContainer).exists(),
  };
};
