import { DataTableDriver } from './DataTable/DataTable.uni.driver';
import { CheckboxUniDriver } from '../Checkbox/Checkbox.uni.driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

export interface TableUniDriver extends DataTableDriver {
  getRowCheckboxDriver: (index: number) => Promise<CheckboxUniDriver>;
  getBulkSelectionCheckboxDriver: () => Promise<CheckboxUniDriver>;
  isBulkSelectionDisabled: () => Promise<boolean>;
  isRowSelectionDisabled: (index: number) => Promise<boolean>;
  clickRowCheckbox: (index: number) => Promise<void>;
  clickBulkSelectionCheckbox: () => Promise<void>;
  isRowSelected: (index: number) => Promise<boolean>;
  getBulkSelectionState: () => Promise<'ALL' | 'SOME' | 'NONE'>;
  getTitlebar: () => Promise<UniDriver | null>;
  getCellTextValue: (row?: number, column?: number) => Promise<string>;
}
