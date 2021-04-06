import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';
import { ButtonSkin } from './index';

export interface ButtonUniDriver extends BaseUniDriver {
  getButtonTextContent: () => Promise<string>;
  isButtonDisabled: () => Promise<boolean>;
  isFocused: () => Promise<boolean>;
  hasSkin: (skinName: ButtonSkin) => Promise<boolean>;
  isPrefixIconExists: () => Promise<boolean>;
  isSuffixIconExists: () => Promise<boolean>;
}

export const buttonDriverFactory: (base: BaseUniDriver) => ButtonUniDriver;
