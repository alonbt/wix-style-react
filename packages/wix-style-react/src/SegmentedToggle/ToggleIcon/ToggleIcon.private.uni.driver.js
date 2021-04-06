export const toggleIconPrivateDriverFactory = base => {
  const element = base.$('[data-hook="toggle-icon"]');

  return {
    exists: async () => await element.exists(),
    childExists: async selector => await element.$(selector).exists(),
    isSelected: async () => (await element.attr('data-selected')) === 'true',
    click: async () => await element.click(),
  };
};
