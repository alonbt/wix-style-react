export const toggleButtonPrivateDriverFactory = base => {
  return {
    exists: async () => await base.exists(),
    getToggleText: async () => await base.text(),
    prefixExists: async () => await base.$('[data-hook="prefix"]').exists(),
    childExists: async selector => await base.$(selector).exists(),
    isSelected: async () => (await base.attr('data-selected')) === 'true',
    click: async () => await base.click(),
    getNative: async () => await base.getNative(),
  };
};
