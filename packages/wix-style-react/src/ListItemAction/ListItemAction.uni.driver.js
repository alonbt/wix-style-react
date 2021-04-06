import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

export const ListItemActionDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),

    isTitleExists: async () =>
      base.$('[data-hook="list-item-action-title"]').exists(),
    getTitleText: async () =>
      base.$('[data-hook="list-item-action-title"]').text(),
    isPrefixIconExists: async () =>
      base.$('[data-hook="list-item-action-prefix-icon"]').exists(),
    isSubtitleExists: async () =>
      base.$('[data-hook="list-item-action-subtitle"]').exists(),
    getSubtitleText: async () =>
      base.$('[data-hook="list-item-action-subtitle"]').text(),
    getSkin: () => base.attr('data-skin'),
    isDisabled: async () => (await base.attr('data-disabled')) === 'true',
  };
};
