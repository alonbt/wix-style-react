import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

export const googlePreviewDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),

    /** Get the current count */
    getPreviewUrl: async () =>
      base.$('[data-hook="googlePreview-previewUrl"]').text(),

    /** Click the button */
    getTitle: async () => base.$('[data-hook="googlePreview-title"]').text(),

    /** Get the button's text */
    getDescription: async () =>
      base.$('[data-hook="googlePreview-description"]').text(),
  };
};
