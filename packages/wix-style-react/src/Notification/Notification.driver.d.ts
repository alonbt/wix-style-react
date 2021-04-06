import { BaseDriver } from 'wix-ui-test-utils/driver-factory';
import { NotificationTheme } from './index';

export interface NotificationDriver extends BaseDriver {
  visible: () => boolean;
  hasTheme: (theme: NotificationTheme) => boolean;
  isStandardNotification: () => boolean;
  isErrorNotification: () => boolean;
  isSuccessNotification: () => boolean;
  isWarningNotification: () => boolean;
  isPremiumNotification: () => boolean;
  getLabelText: () => string;
  hasActionButton: () => boolean;
  getActionButtonText: () => string;
  hasCloseButton: () => boolean;
  isRelativelyPositioned: () => boolean;
  isFixedPositioned: () => boolean;
  isAbsolutePositioned: () => boolean;
  clickOnCloseButton: () => void;
  clickOnActionButton: () => void;
  getZIndex: () => number;
}
