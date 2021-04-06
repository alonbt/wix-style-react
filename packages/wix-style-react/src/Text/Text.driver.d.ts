import { BaseDriver } from 'wix-ui-test-utils/driver-factory';
import { TextSize, TextSkin, TextWeight } from './index';

export interface TextDriver extends BaseDriver {
  getTagName: () => string;
  getText: () => string;
  getSize: () => TextSize;
  getSkin: () => TextSkin;
  getWeight: () => TextWeight;
  isLight: () => boolean;
  isSecondary: () => boolean;
}
