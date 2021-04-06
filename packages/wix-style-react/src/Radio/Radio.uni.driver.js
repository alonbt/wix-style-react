import { baseUniDriverFactory } from '../../test/utils/unidriver';
import { dataHooks } from './constants';

export const radioUniDriverFactory = (base, body) => {
  const byHook = hook => base.$(`[data-hook="${hook}"]`);

  const getInput = () => byHook(dataHooks.input);
  const getIcon = () => byHook(dataHooks.icon);
  const getLabel = () => byHook(dataHooks.label);
  return {
    ...baseUniDriverFactory(base, body),

    /**
    /* Triggers a keyDown event on the radio input 
     * @param {string} key
     * @return {Promise<void>}
     */
    keyDown: key => getInput().pressKey(key),

    /**
     * Gets value of radio input
     * @return {Promise<string>}
     */
    getValue: () => getInput().attr('value'),

    /**
     * Gets name of radio input
     * @return {Promise<string>}
     */
    getName: () => getInput().attr('name'),

    /**
     * Gets id of radio input
     * @return {Promise<string>}
     */
    getId: () => getInput().attr('id'),

    /**
     * Checks if icon of radio exists
     * @return {Promise<boolean>}
     */
    iconExists: () => getIcon().exists(),

    /**
     * Checks if label of radio exists
     * @return {Promise<boolean>}
     */
    labelExists: () => getLabel().exists(),

    /**
     * Checks if radio is checked
     * @return {Promise<boolean>}
     */
    isChecked: async () => (await base.attr('data-checked')) === 'true',

    /**
     * Checks if radio is disabled
     * @return {Promise<boolean>}
     */
    isDisabled: async () => (await base.attr('data-disabled')) === 'true',
  };
};
