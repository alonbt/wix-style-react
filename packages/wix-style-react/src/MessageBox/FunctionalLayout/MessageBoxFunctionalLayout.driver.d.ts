import { BaseDriver } from 'wix-ui-test-utils/driver-factory';
import { MessageBoxFunctionalLayoutTheme } from './MessageBoxFunctionalLayout';

export interface MessageBoxFunctionalLayoutDriver<T> extends BaseDriver {
  element: () => T;
  getConfirmationButtonText: () => string;
  isConfirmationButtonPrefixIconExists: () => boolean;
  isConfirmationButtonSuffixIconExists: () => boolean;
  clickOnConfirmationButton: () => void;
  getConfirmationButton: () => HTMLButtonElement;
  getCancellationButton: () => HTMLButtonElement;
  getHeaderCloseButton: () => HTMLButtonElement;
  getCancellationButtonText: () => string;
  isCancellationButtonPrefixIconExists: () => boolean;
  isCancellationButtonSuffixIconExists: () => boolean;
  clickOnCancellationButton: () => void;
  clickOnHeaderCloseButton: () => void;
  isThemeExist: (theme: MessageBoxFunctionalLayoutTheme) => boolean;
  getFooter: () => HTMLElement;
  getTitle: () => string;
  getChildBySelector: (selector: string) => HTMLElement | null;
  isCancelEnable: () => boolean;
  isConfirmationEnable: () => boolean;
  toHaveBodyPadding: () => boolean;
}
