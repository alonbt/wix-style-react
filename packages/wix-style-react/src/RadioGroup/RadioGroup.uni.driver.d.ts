import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';
import { RadioButtonUniDriver } from './RadioButton/RadioButton.uni.driver';

export interface RadioGroupUniDriver extends BaseUniDriver {
  selectByValue: (value: string | number) => Promise<void>;
  selectByIndex: (index: number) => Promise<void>;
  getRadioValueAt: (index: number) => Promise<string | number>;
  getRadioIdAt: (index: number) => Promise<string>;
  getRadioName: () => Promise<string>;
  getRadioAtIndex: (
    index: number,
  ) => Promise<HTMLElement & RadioButtonUniDriver>;
  getSelectedValue: () => Promise<string | number | null>;
  isRadioDisabled: (index: number) => Promise<boolean>;
  getClassOfLabelAt: (index: number) => Promise<string>;
  isVerticalDisplay: () => Promise<boolean>;
  isHorizontalDisplay: () => Promise<boolean>;
  isButtonType: () => Promise<boolean>;
  spacing: () => Promise<string>;
  lineHeight: () => Promise<string>;
  getNumberOfRadios: () => Promise<number>;
}
