import { BaseDriver } from 'wix-ui-test-utils/driver-factory';

export interface ColorPickerDriver extends BaseDriver {
  confirm: () => void;
  cancel: () => void;
  clickOnPreviousColor: () => void;
  historyPanelExists: () => boolean;
  historyCurrentColor: () => string;
  historyPreviousColor: () => string;
}
