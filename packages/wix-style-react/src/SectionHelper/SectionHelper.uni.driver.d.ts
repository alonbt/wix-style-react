import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';

export interface SectionHelperUniDriver extends BaseUniDriver {
  titleText: () => Promise<string>;
  actionText: () => Promise<string>;
  clickAction: () => Promise<void>;
  clickClose: () => Promise<void>;
  isCloseButtonDisplayed: () => Promise<boolean>;
  textContent: () => Promise<string>;
  isWarning: () => Promise<boolean>;
  isStandard: () => Promise<boolean>;
  isDanger: () => Promise<boolean>;
  isExperimentalDark: () => Promise<boolean>;
  isSuccess: () => Promise<boolean>;
  isPremium: () => Promise<boolean>;
  isPreview: () => Promise<boolean>;
}
