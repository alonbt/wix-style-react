import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface MediaOverlayUniDriver<T> extends BaseUniDriver {
  hover: () => Promise<void>;
  getMediaUrl: () => Promise<string | null>;
  getMediaNode: () => Promise<T>;
  getSkin: () => Promise<string | null>;
  getHoverSkin: () => Promise<string | null>;
}
