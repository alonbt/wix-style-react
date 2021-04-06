import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

export const socialPreviewDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),
    /** Get SocialPreview title */
    getTitle: async () => base.$('[data-hook="socialPreview-title"]').text(),

    /** Get SocialPreview url */
    getPreviewUrl: async () => base.$('[data-hook="socialPreview-url"]').text(),

    /** Get SocialPreview description */
    getDescription: async () =>
      base.$('[data-hook="socialPreview-description"]').text(),

    /** Get SocialPreview skin */
    getSkin: () => base.attr('data-skin'),

    /** Get SocialPreview size */
    getSize: () => base.attr('data-size'),
  };
};
