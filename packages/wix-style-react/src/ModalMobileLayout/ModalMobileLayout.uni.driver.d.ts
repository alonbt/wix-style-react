import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

export interface ModalMobileLayoutUniDriver extends BaseUniDriver {
  getTitle: () => UniDriver;
  getContent: () => UniDriver;
  getFooter: () => UniDriver;
  clickOverlay: () => Promise<void>;
  clickCloseButton: () => Promise<void>;
  closeButtonExists: () => Promise<boolean>;
}
