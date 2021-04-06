import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';
import { StatusIndications } from '../common';

export interface ListItemEditableUniDriver extends BaseUniDriver {
  getPlaceholder(): Promise<string>;
  isApproveButtonDisabled(): Promise<boolean>;
  enterText(text: string): Promise<void>;
  clickApprove(): Promise<void>;
  clickCancel(): Promise<void>;
  getCancelButtonTooltipText(): Promise<string>;
  getApproveButtonTooltipText(): Promise<string>;

  // Status
  hasStatus: (status: StatusIndications) => Promise<boolean>;
  getStatusMessage: () => Promise<string | null>;
}
