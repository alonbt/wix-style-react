import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

export interface ModalPreviewLayoutUniDriver extends BaseUniDriver {
  clickOverlay: () => Promise<void>;
  getPreviewTitle: () => UniDriver;
  getPreviewActions: () => UniDriver;
  getPreviewContent: () => UniDriver;
  clickClose: () => Promise<void>;
}
