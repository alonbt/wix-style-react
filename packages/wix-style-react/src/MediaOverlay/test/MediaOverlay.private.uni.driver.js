import { mediaOverlayDriverFactory as publicDriverFactory } from '../MediaOverlay.uni.driver';

export const mediaOverlayPrivateDriverFactory = base => {
  return {
    ...publicDriverFactory(base),
    getContentChildren: async () =>
      await base.$$(`[data-hook="content-area"] > *`),
  };
};
