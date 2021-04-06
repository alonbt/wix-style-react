import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface AddressInputUniDriver extends BaseUniDriver {
  getInputValue: () => Promise<string>;
  enterText: (value: string) => Promise<void>;
  clickClear: () => Promise<void>;
  isDisabled: () => Promise<boolean>;
  isLoading: () => Promise<boolean>;
  clickAtOption: (index: number) => Promise<void>;
  clickAtOptionWithValue: (value: string) => Promise<void>;
  clickInput: () => Promise<void>;
  getAmountOfItems: () => Promise<number>;
  getItemMainLabelAt: () => Promise<string>;
  getItemSecondaryLabelAt: () => Promise<string>;
  pressEnter: () => Promise<void>;
}
