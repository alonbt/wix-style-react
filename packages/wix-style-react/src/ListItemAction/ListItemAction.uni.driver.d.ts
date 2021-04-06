import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';

export interface ListItemActionUniDriver extends BaseUniDriver {
  isTitleExists: () => Promise<boolean>;
  getTitleText: () => Promise<string>;
  isPrefixIconExists: () => Promise<boolean>;
  getSkin: () => Promise<string | null>;
  isSubtitleExists: () => Promise<boolean>;
  getSubtitleText: () => Promise<string>;
  isDisabled: () => Promise<boolean>;
}
