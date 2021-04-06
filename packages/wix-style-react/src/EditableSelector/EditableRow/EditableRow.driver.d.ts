import { BaseDriver } from 'wix-ui-test-utils/driver-factory';
import { InputDriver } from '../../Input/Input.driver';

export interface EditableRowDriver extends BaseDriver {
  isInputFocused: () => boolean;
  clickApprove: () => void;
  clickCancel: () => void;
  isApproveDisabled: () => boolean;
  getText: () => string;
  setText: (text: string) => void;
  keyDown: (keyCode: number) => void;
}
