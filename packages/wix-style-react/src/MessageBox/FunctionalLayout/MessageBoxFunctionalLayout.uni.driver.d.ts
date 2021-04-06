import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';
import { MessageBoxFunctionalLayoutTheme } from './MessageBoxFunctionalLayout';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

export interface MessageBoxFunctionalLayoutUniDriver extends BaseUniDriver {
  getConfirmationButtonText: () => Promise<string>;
  isConfirmationButtonPrefixIconExists: () => Promise<boolean>;
  isConfirmationButtonSuffixIconExists: () => Promise<boolean>;
  clickOnConfirmationButton: () => Promise<void>;
  getConfirmationButton: () => Promise<UniDriver | null>;
  getCancellationButton: () => Promise<UniDriver | null>;
  getHeaderCloseButton: () => Promise<UniDriver | null>;
  getCancellationButtonText: () => Promise<string>;
  isCancellationButtonPrefixIconExists: () => Promise<boolean>;
  isCancellationButtonSuffixIconExists: () => Promise<boolean>;
  clickOnCancellationButton: () => Promise<void>;
  clickOnHeaderCloseButton: () => Promise<void>;
  isThemeExist: (theme: MessageBoxFunctionalLayoutTheme) => Promise<boolean>;
  getFooter: () => Promise<UniDriver | null>;
  getTitle: () => Promise<string>;
  getChildBySelector: (selector: string) => Promise<UniDriver | null>;
  isCancelEnable: () => Promise<boolean>;
  isConfirmationEnable: () => Promise<boolean>;
  toHaveBodyPadding: () => Promise<boolean>;
}
