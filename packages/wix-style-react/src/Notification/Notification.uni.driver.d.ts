import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';
import { NotificationTheme } from './index';

export interface NotificationUniDriver extends BaseUniDriver {
  visible: () => Promise<boolean>;
  hasTheme: (theme: NotificationTheme) => Promise<boolean>;
  isStandardNotification: () => Promise<boolean>;
  isErrorNotification: () => Promise<boolean>;
  isSuccessNotification: () => Promise<boolean>;
  isWarningNotification: () => Promise<boolean>;
  isPremiumNotification: () => Promise<boolean>;
  getLabelText: () => Promise<string>;
  hasActionButton: () => Promise<boolean>;
  getActionButtonText: () => Promise<string>;
  hasCloseButton: () => Promise<boolean>;
  isRelativelyPositioned: () => Promise<boolean>;
  isFixedPositioned: () => Promise<boolean>;
  isAbsolutePositioned: () => Promise<boolean>;
  clickOnCloseButton: () => Promise<void>;
  clickOnActionButton: () => Promise<void>;
  getZIndex: () => Promise<number>;
}
