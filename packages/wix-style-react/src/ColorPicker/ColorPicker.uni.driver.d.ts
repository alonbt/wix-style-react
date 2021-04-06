import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

export interface ColorPickerUniDriver extends BaseUniDriver {
  confirm: () => Promise<void>;
  cancel: () => Promise<void>;
  clickOnPreviousColor: () => Promise<void>;
  historyPanelExists: () => Promise<boolean>;
  historyCurrentColor: () => Promise<string>;
  historyPreviousColor: () => Promise<string>;
  clickAddColor: () => Promise<void>;
  getChildren: () => UniDriver;
  selectRgbTab: () => Promise<void>;
  selectHsbTab: () => Promise<void>;
}
