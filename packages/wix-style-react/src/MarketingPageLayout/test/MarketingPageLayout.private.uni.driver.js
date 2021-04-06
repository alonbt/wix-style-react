import { marketingPageLayoutDriverFactory as publicDriverFactory } from '../MarketingPageLayout.uni.driver';

export const marketingPageLayoutPrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),

    // Add here driver methods that considered "private"
  };
};
