import { dataHooks } from './constants';

export const radioDriverFactory = ({ element, eventTrigger }) => {
  const byHook = hook => element.querySelector(`[data-hook*="${hook}"]`);
  const getInput = () => byHook(dataHooks.input);
  const getIcon = () => byHook(dataHooks.icon);
  const getLabel = () => byHook(dataHooks.label);

  return {
    exists: () => !!element,

    /**
    /* Triggers a keyDown event on the radio input 
     * @param {string} key
     * @return {void}
     */
    keyDown: key => eventTrigger.keyDown(getInput(), { key }),

    /**
    /* Triggers click event on radio
     * @return {void}
     */
    click: () => eventTrigger.click(element),

    /**
     * Gets value of radio input
     * @return {string}
     */
    getValue: () => getInput().getAttribute('value'),

    /**
     * Gets name of radio input
     * @return {string}
     */
    getName: () => getInput().getAttribute('name'),

    /**
     * Gets id of radio input
     * @return {string}
     */
    getId: () => getInput().getAttribute('id'),

    /**
     * Checks if icon of radio exists
     * @return {boolean}
     */
    iconExists: () => !!getIcon(),

    /**
     * Checks if label of radio exists
     * @return {boolean}
     */
    labelExists: () => !!getLabel(),

    /**
     * Checks if radio is checked
     * @return {boolean}
     */
    isChecked: () => element.getAttribute('data-checked') === 'true',

    /**
     * Checks if radio is disabled
     * @return {boolean}
     */
    isDisabled: () => element.getAttribute('data-disabled') === 'true',
  };
};

export default radioDriverFactory;
