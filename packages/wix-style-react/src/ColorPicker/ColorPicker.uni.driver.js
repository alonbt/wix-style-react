import { baseUniDriverFactory } from '../../test/utils/unidriver';

import { DataHooks } from './constants';

export const colorPickerUniDriverFactory = base => {
  const getConverter = () => base.$(`[data-hook="${DataHooks.converter}"]`);
  const getConverterTabs = async () => {
    return getConverter().$$(`li`);
  };

  return {
    ...baseUniDriverFactory(base),
    /**
     * Clicks the confirm button
     * @returns {Promise<Void>}
     * */
    confirm: async () =>
      base.$(`[data-hook="${DataHooks.confirmButton}"]`).click(),
    /**
     * Clicks the cancel button
     * @returns {Promise<Void>}
     * */
    cancel: async () =>
      base.$(`[data-hook="${DataHooks.cancelButton}"]`).click(),
    /**
     * Clicks the previous color selection
     * @returns {Promise<Void>}
     */
    clickOnPreviousColor: async () =>
      base.$(`[data-hook="${DataHooks.historyPrevious}"]`).click(),
    /**
     * Checks whether the history panel exists
     * @returns {Promise<boolean>}
     */
    historyPanelExists: async () =>
      base.$(`[data-hook="${DataHooks.history}"]`).exists(),
    /**
     * Gets the current selected color
     * @returns {Promise<string>}
     */
    historyCurrentColor: async () =>
      (await base.$(`[data-hook="${DataHooks.historyCurrent}"]`)._prop('style'))
        .background,
    /**
     * Gets the previous color selected
     * @returns {Promise<string>}
     */
    historyPreviousColor: async () =>
      (
        await base
          .$(`[data-hook="${DataHooks.historyPrevious}"]`)
          ._prop('style')
      ).background,
    /**
     * Clicks the add new color button
     * @returns {Promise<Void>}
     */
    clickAddColor: async () =>
      base.$(`[data-hook=${DataHooks.addColor}]`).click(),
    /**
     * Gets children nodes
     * @returns {Promise<node>}
     */
    getChildren: async () => base.$(`[data-hook="${DataHooks.children}"]`),
    /**
     * Clicks on RGB tab
     * @returns {Promise<Void>}
     */
    selectRgbTab: async () => (await getConverterTabs()).get(1).click(),
    /**
     * Clicks on HSB tab
     * @returns {Promise<Void>}
     */
    selectHsbTab: async () => (await getConverterTabs()).get(2).click(),
  };
};

export default colorPickerUniDriverFactory;
