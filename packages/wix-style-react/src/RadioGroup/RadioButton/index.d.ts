import * as React from 'react';

export type RadioButtonVAlign = 'center' | 'top';
export type RadioButtonType = 'default' | 'button';
export type RadioButtonSelectionArea = 'none' | 'hover' | 'always';
export type RadioButtonSelectionAreaSkin = 'filled' | 'outlined';

export interface RadioButtonProps {
  dataHook?: string;
  value?: string | number;
  vAlign?: RadioButtonVAlign;
  name?: string;
  onChange?: (value: RadioButtonProps['value']) => void;
  checked?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
  type?: RadioButtonType;
  lineHeight?: string;
  tabIndex?: number;
  selectionArea?: RadioButtonSelectionArea;
  selectionAreaSkin?: RadioButtonSelectionAreaSkin;
  selectionAreaPadding?: React.CSSProperties['padding'];
  content?: React.ReactNode;
  className?: string;
}

export default class RadioButton extends React.PureComponent<RadioButtonProps> {}
