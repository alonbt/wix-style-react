import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';

export interface GooglePreviewUniDriver extends BaseUniDriver {
  getPreviewUrl: () => Promise<string>;
  getTitle: () => Promise<string>;
  getDescription: () => Promise<string>;
}
