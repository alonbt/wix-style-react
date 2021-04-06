import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';
import { TextSize, TextSkin, TextWeight } from './index';

export interface TextUniDriver extends BaseUniDriver {
  getTagName: () => Promise<string>;
  getText: () => Promise<string>;
  getSize: () => Promise<TextSize>;
  getSkin: () => Promise<TextSkin>;
  getWeight: () => Promise<TextWeight>;
  isLight: () => Promise<boolean>;
  isSecondary: () => Promise<boolean>;
}
