import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';
import { HeadingAppearance } from './index';

export interface HeadingUniDriver extends BaseUniDriver {
  getText(): Promise<string>;
  getAppearance(): Promise<HeadingAppearance | null>;
  isLight(): Promise<boolean>;
}
