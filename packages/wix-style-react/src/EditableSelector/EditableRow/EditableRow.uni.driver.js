import { testkit as inputDriverFactory } from '../../Input/Input.uni.driver';
import { iconButtonDriverFactory } from '../../IconButton/IconButton.uni.driver';
import {
  baseUniDriverFactory,
  findByHook,
} from '../../../test/utils/unidriver';
import { dataHooks } from './constants';

export const editableRowUniDriverFactory = base => {
  const input = findByHook(base, dataHooks.editRowInput);
  const approveBtn = findByHook(base, dataHooks.editRowApproveButton);
  const cancelBtn = findByHook(base, dataHooks.editRowCancelButton);

  const inputDriver = inputDriverFactory(input);
  const approveBtnDriver = iconButtonDriverFactory(approveBtn);
  const cancelBtnDriver = iconButtonDriverFactory(cancelBtn);

  return {
    ...baseUniDriverFactory(base),
    isInputFocused: () => inputDriver.isFocus(),
    clickApprove: () => approveBtnDriver.click(),
    isApproveDisabled: () => approveBtnDriver.isButtonDisabled(),
    clickCancel: () => cancelBtnDriver.click(),
    getText: () => inputDriver.getValue(),
    setText: text => inputDriver.enterText(text),
    keyDown: keyCode => inputDriver.trigger('keyDown', { keyCode }),
  };
};
