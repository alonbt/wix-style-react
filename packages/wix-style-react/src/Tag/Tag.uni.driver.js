import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { dataAttr, dataHooks } from './Tag.helpers';

export const tagUniDriverFactory = base => {
  const removeButton = base.$(`[data-hook="${dataHooks.removeButton}"]`);
  const thumb = base.$(`[data-hook="${dataHooks.thumb}"]`);

  return {
    ...baseUniDriverFactory(base),
    isTiny: async () => (await base.attr(dataAttr.SIZE)) === 'tiny',
    isSmall: async () => (await base.attr(dataAttr.SIZE)) === 'small',
    isMedium: async () => (await base.attr(dataAttr.SIZE)) === 'medium',
    isLarge: async () => (await base.attr(dataAttr.SIZE)) === 'large',
    isStandardTheme: async () =>
      (await base.attr(dataAttr.THEME)) === 'standard',
    isWarningTheme: async () => (await base.attr(dataAttr.THEME)) === 'warning',
    isErrorTheme: async () => (await base.attr(dataAttr.THEME)) === 'error',
    isDarkTheme: async () => (await base.attr(dataAttr.THEME)) === 'dark',
    isRemovable: () => removeButton.exists(),
    removeTag: () => removeButton.click(),
    click: () => base.click(),
    isThumbExists: () => thumb.exists(),
    isDisabled: async () => (await base.attr(dataAttr.DISABLED)) === 'true',
    getLabel: () => base.text(),
  };
};
