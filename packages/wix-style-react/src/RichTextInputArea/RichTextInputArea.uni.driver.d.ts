import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';
import { StatusIndications } from '../common';

export interface RichTextInputAreaUniDriver extends BaseUniDriver {
  isDisabled: () => Promise<boolean>;
  getContent: () => Promise<string>;
  getPlaceholder: () => Promise<string | null>;
  enterText: (value: string) => Promise<void>;

  // Status
  hasStatus: (status: StatusIndications) => Promise<boolean>;
  getStatusMessage: () => Promise<string | null>;
}
