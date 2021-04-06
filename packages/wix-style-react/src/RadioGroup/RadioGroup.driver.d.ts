import { BaseDriver } from 'wix-ui-test-utils/driver-factory';
import { RadioButtonDriver } from './RadioButton/RadioButton.driver';

export interface RadioGroupDriver extends BaseDriver {
  selectByValue: (value: string | number) => void;
  selectByIndex: (index: number) => void;
  getRadioValueAt: (index: number) => string | number;
  getRadioIdAt: (index: number) => string;
  getRadioName: () => string;
  getRadioAtIndex: (index: number) => HTMLElement & RadioButtonDriver;
  getSelectedValue: () => string | number | null;
  isRadioDisabled: (index: number) => boolean;
  getClassOfLabelAt: (index: number) => string;
  isVerticalDisplay: () => boolean;
  isHorizontalDisplay: () => boolean;
  isButtonType: () => boolean;
  spacing: () => string;
  lineHeight: () => string;
  getNumberOfRadios: () => number;
}
