import { listItemEditableDriverFactory as publicDriverFactory } from '../ListItemEditable.uni.driver';
import { testkit as inputUniDriverFactory } from '../../Input/Input.uni.driver';
import { dataHooks } from '../constants';

export const listItemEditablePrivateDriverFactory = (base, body) => {
  const inputSelector = `[data-hook="${dataHooks.input}"]`;
  const inputDriver = inputUniDriverFactory(base.$(inputSelector), body);
  return {
    ...publicDriverFactory(base, body),

    /** Whether option's input is focused
     * @returns {Promise<boolean>}
     */
    isInputFocused: () => inputDriver.isFocus(),

    /** Clicks option's input
     * @returns {Promise<void>}
     */
    clickInput: () => inputDriver.click(),
  };
};
