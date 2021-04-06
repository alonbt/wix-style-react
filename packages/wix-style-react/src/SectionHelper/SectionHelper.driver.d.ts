import { BaseDriver } from 'wix-ui-test-utils/driver-factory';

export interface SectionHelperDriver extends BaseDriver {
  titleText: () => string;
  actionText: () => string;
  clickAction: () => void;
  clickClose: () => void;
  isCloseButtonDisplayed: () => boolean;
  textContent: () => string;
  isWarning: () => boolean;
  isStandard: () => boolean;
  isDanger: () => boolean;
  isExperimentalDark: () => boolean;
  isSuccess: () => boolean;
  isPremium: () => boolean;
  isPreview: () => boolean;
}
