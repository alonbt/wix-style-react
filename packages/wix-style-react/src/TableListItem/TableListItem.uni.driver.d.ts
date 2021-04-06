import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface TableListItemUniDriver extends BaseUniDriver {
  getColumnTextAt(columnIndex: number): Promise<string>;
  isCheckboxExists(): Promise<boolean>;
  isCheckboxChecked(): Promise<boolean>;
  toggleCheckbox(): Promise<void>;
}
