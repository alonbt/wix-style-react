import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

export interface MessageBoxMarketerialLayoutUniDriver extends BaseUniDriver {
  getPrimaryButtonText: () => Promise<string>;
  getPrimaryButton: () => Promise<UniDriver | null>;
  getPrimaryButtonNode: () => Promise<UniDriver | null>;
  getSecondaryButtonText: () => Promise<string>;
  getSecondaryButton: () => Promise<UniDriver | null>;
  getHeaderCloseButton: () => Promise<UniDriver | null>;
  clickOnPrimaryButton: () => void;
  clickOnSecondaryButton: () => void;
  closeMessageBox: () => void;
  getTitle: () => Promise<string>;
  getContentBySelector: (selector: string) => Promise<UniDriver | null>;
  getImageSrc: () => Promise<string | null>;
}
