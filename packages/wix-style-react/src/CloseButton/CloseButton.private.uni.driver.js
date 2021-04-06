import { closeButtonDriverFactory as publicDriverFactory } from './CloseButton.uni.driver';

export const closeButtonPrivateDriverFactory = base => {
  return {
    ...publicDriverFactory(base),
    closeIconExists: async () => await base.$('[data-hook="close"]').exists(),
    mediumCloseIconExists: async () =>
      await base.$('[data-hook="close-medium"]').exists(),
    largeCloseIconExists: async () =>
      await base.$('[data-hook="close-large"]').exists(),
    customIconSize: async () =>
      await base.$('[data-hook="children-icon"]').attr('height'),
  };
};
