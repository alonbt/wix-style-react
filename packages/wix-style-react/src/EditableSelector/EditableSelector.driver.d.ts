import { BaseDriver } from 'wix-ui-test-utils/driver-factory';
import { SelectorDriver } from '../Selector/Selector.driver';

export interface EditableSelectorDriver extends BaseDriver {
  items: () => SelectorDriver[];
  exists: () => boolean;
  isEditing: () => boolean;
  isEditingRow: () => boolean;
  isAddingRow: () => boolean;
  newRowButton: () => HTMLElement;
  deleteButtonAt: (index: number) => HTMLElement;
  editButtonAt: (index: number) => HTMLElement;
  addNewRow: (label: string) => void;
  editRow: (index: number, label: string) => void;
  deleteRow: (index: number) => void;
  startAdding: () => void;
  startEditing: (index: number) => void;
  clickApprove: () => void;
  clickCancel: () => void;
  title: () => string;
  toggleItem: (index: number) => string;
}
