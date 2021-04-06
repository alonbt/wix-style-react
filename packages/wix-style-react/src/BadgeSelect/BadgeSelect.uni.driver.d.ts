import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';
import { BadgeSize, BadgeType, BadgeSkin } from '../Badge';

export interface BadgeSelectUniDriver extends BaseUniDriver {
  getContent: () => Promise<HTMLElement>;
  text: () => Promise<string>;
  getType: () => Promise<BadgeType>;
  getSkin: () => Promise<BadgeSkin>;
  getSize: () => Promise<BadgeSize>;
  isUppercase: () => Promise<boolean>;
  hasClickCursor: () => Promise<boolean>;
  clickAtOption: (index: number) => Promise<void>;
}
