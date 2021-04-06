import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface BadgeSelectItemUniDriver extends BaseUniDriver {
  getText(): Promise<string>;
  getSubtitleText(): Promise<string>;
}
