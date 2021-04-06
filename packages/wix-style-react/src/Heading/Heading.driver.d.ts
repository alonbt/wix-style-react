import { BaseDriver } from 'wix-ui-test-utils/driver-factory';
import { HeadingAppearance } from './index';

export interface HeadingDriver extends BaseDriver {
  getText: () => string;
  getAppearance: () => HeadingAppearance | null;
  isLight: () => boolean;
}
