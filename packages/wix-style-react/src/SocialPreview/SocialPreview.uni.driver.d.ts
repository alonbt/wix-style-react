import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';
import { SocialPreviewSize, SocialPreviewSkin } from './index';

export interface SocialPreviewUniDriver extends BaseUniDriver {
  getTitle: () => Promise<string>;
  getPreviewUrl: () => Promise<string>;
  getDescription: () => Promise<string>;
  getSkin: () => Promise<SocialPreviewSkin>;
  getSize: () => Promise<SocialPreviewSize>;
}
