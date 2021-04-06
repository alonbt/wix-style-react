import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface EditableRowUniDriver extends BaseUniDriver {
  isInputFocused: () => Promise<boolean>;
  clickApprove: () => Promise<void>;
  isApproveDisabled: () => Promise<boolean>;
  clickCancel: () => Promise<void>;
  getText: () => Promise<string>;
  setText: (text: string) => Promise<void>;
  keyDown: (keyCode: number) => Promise<void>;
}
