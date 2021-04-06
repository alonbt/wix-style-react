import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';
import { InputSize } from '../Input';
import { StatusIndications } from '../common';

export interface ColorInputUniDriver extends BaseUniDriver {
  cancel(): Promise<void>;
  confirm(): Promise<void>;
  clickColorViewer(): Promise<void>;
  enterText: (text: string) => Promise<void>;
  getValue(): Promise<string>;
  getPlaceholder(): Promise<string | null>;
  getSize(): Promise<InputSize | null>;
  isDisabled(): Promise<boolean>;
  colorPickerVisible(): Promise<boolean>;

  // Status
  hasStatus: (status: StatusIndications) => Promise<boolean>;
  getStatusMessage: () => Promise<string | null>;
}
