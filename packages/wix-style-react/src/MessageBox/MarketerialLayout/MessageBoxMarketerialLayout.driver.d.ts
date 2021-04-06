import { BaseDriver } from 'wix-ui-test-utils/driver-factory';

export interface MessageBoxMarketerialLayoutDriver extends BaseDriver {
  getPrimaryButtonText: () => string;
  getPrimaryButton: () => HTMLButtonElement;
  getPrimaryButtonNode: () => HTMLElement | null;
  getSecondaryButtonText: () => string;
  getSecondaryButton: () => HTMLElement;
  getHeaderCloseButton: () => HTMLButtonElement;
  clickOnPrimaryButton: () => void;
  clickOnSecondaryButton: () => void;
  closeMessageBox: () => void;
  getTitle: () => string;
  getContentBySelector: (selector: string) => HTMLElement | null;
  getImageSrc: () => string;
}
