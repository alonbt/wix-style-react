import * as React from 'react';
export { RadioButtonVAlign, RadioButtonType, RadioButtonSelectionArea, RadioButtonSelectionAreaSkin } from './RadioButton';
import RadioButton, { RadioButtonProps } from './RadioButton';

export type RadioGroupDisplay = 'vertical' | 'horizontal';
export interface RadioGroupProps {
  dataHook?: string;
  onChange?: RadioButtonProps['onChange'];
  value?: RadioButtonProps['value'];
  disabledRadios?: RadioButtonProps['value'][];
  vAlign?: RadioButtonProps['vAlign'];
  disabled?: RadioButtonProps['disabled'];
  type?: RadioButtonProps['type'];
  display?: RadioGroupDisplay;
  selectionArea?: RadioButtonProps['selectionArea'];
  selectionAreaSkin?: RadioButtonProps['selectionAreaSkin'];
  selectionAreaPadding?: RadioButtonProps['selectionAreaPadding'];
  spacing?: string;
  lineHeight?: string;
  name?: string;
}

export default class RadioGroup extends React.PureComponent<RadioGroupProps> {
  static Radio: typeof RadioButton;
}
