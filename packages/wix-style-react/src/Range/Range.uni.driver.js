import { baseUniDriverFactory, findByHook } from '../../test/utils/unidriver';
import { DATA_HOOKS } from './constants';

export const rangeUniDriverFactory = (base, body) => {
  const label = () => findByHook(base, DATA_HOOKS.label);
  const input = () => findByHook(base, DATA_HOOKS.inputWrapper);

  const firstInput = () => input().$(':first-child');
  const lastInput = () => input().$(':last-child');

  return {
    ...baseUniDriverFactory(base, body),

    /**
     * Gets the input wrapper
     * @returns {Promise<HTMLElement>}
     */
    getInput: () => input,

    /**
     * Checks if both inputs exist
     * @returns {Promise<boolean>}
     */
    hasInput: () => !!firstInput() && !!lastInput(),

    /**
     * Gets the label
     * @returns {Promise<HTMLElement>}
     */
    getLabel: () => label,

    /**
     * Checks if label exists
     * @returns {Promise<boolean>}
     */
    hasLabel: () => label().exists(),
  };
};
