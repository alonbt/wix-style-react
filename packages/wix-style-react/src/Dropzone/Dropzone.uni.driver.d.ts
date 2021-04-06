import { BaseUniDriver, UniDriver } from 'wix-ui-test-utils/unidriver';

export interface DropzoneUniDriver extends BaseUniDriver {
  dropFiles(files: File[]): Promise<void>;
  getContentElement(): UniDriver;
  getOverlayElement(): UniDriver;
}
