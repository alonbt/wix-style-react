import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

export const messageBoxMarketerialLayoutUniDriverFactory = base => {
  const getPrimaryButtonBase = () => base.$('[data-hook="primary-button"]');
  const getPrimaryButtonNodeBase = () =>
    base.$('[data-hook="primary-button-node"]');
  const getSecondaryButtonBase = () => base.$('[data-hook="secondary-button"]');
  const getCloseButtonBase = () => base.$('[data-hook="close-button"]');
  const getMessageBoxTitleBase = () =>
    base.$('[data-hook="message-box-title"]');
  const getHeaderImageBase = () => base.$('[data-hook="header-image"]');

  return {
    ...baseUniDriverFactory(base),
    getPrimaryButtonText: () => getPrimaryButtonBase().text(),
    getPrimaryButton: async () =>
      (await getPrimaryButtonBase().exists()) ? getPrimaryButtonBase() : null,
    getPrimaryButtonNode: async () =>
      (await getPrimaryButtonNodeBase().exists())
        ? getPrimaryButtonNodeBase()
        : null,
    getSecondaryButtonText: () => getSecondaryButtonBase().text(),
    getSecondaryButton: async () =>
      (await getSecondaryButtonBase().exists())
        ? getSecondaryButtonBase()
        : null,
    getHeaderCloseButton: async () =>
      (await getCloseButtonBase().exists()) ? getCloseButtonBase() : null,
    clickOnPrimaryButton: () => getPrimaryButtonBase().click(),
    clickOnSecondaryButton: () => getSecondaryButtonBase().click(),
    closeMessageBox: () => getCloseButtonBase().click(),
    getTitle: () => getMessageBoxTitleBase().text(),
    getContentBySelector: async selector =>
      (await base.$(selector).exists()) ? base.$(selector) : null,
    getImageSrc: () => getHeaderImageBase().attr('src'),
  };
};
