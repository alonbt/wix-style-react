export const segmentedToggleDriverFactory = base => {
  const findChild = hook => {
    if (typeof hook === 'string') {
      return base.$(`[data-hook="${hook}"]`);
    }

    return base.$(`[data-click="segmented-toggle-${hook}"]`);
  };
  return {
    /**
     * Selects child by given number (selection begins with 1) or dataHook
     * @param {string | number} hook Hook name or index
     * @returns { Promise<void>}
     */
    selectChild: async hook => findChild(hook).click(),

    /**
     * Returns true if child is selected by given number (selection begins with 1) or dataHook
     * @param {string | number} hook Hook name or index
     * @returns { Promise<void>}
     */
    isSelected: async hook =>
      (await findChild(hook).attr('aria-selected')) === 'true',
    /**
     * Checks whether element is in the DOM
     * @returns { Promise<boolean>}
     */
    exists: async () => await base.exists(),

    /**
     * Gets the actual element
     * @returns { Promise<any>}
     */
    element: async () => await base.getNative(), // eslint-disable-line no-restricted-properties
  };
};
