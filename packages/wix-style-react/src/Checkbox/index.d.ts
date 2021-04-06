import * as React from 'react';
import { TooltipCommonProps } from '../common';

export interface CheckboxProps {
  dataHook?: string;
  checked?: boolean;
  disabled?: boolean;
  hasError?: boolean;
  id?: string;
  indeterminate?: boolean;
  errorMessage?: string;
  selectionArea?: CheckboxSelectionArea;
  vAlign?: CheckboxVAlign;
  hover?: boolean;
  size?: CheckboxLabelSize;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
  tooltipProps?: TooltipCommonProps;
  tooltipContent?: React.ReactNode;
  selectionAreaSkin?: CheckboxSelectionAreaSkin;
  selectionAreaPadding?: React.CSSProperties['padding'];
}

export default class Checkbox extends React.PureComponent<CheckboxProps> {}

export type CheckboxLabelSize = 'medium' | 'small';
export type CheckboxSelectionArea = 'none' | 'hover' | 'always';
export type CheckboxVAlign = 'center' | 'top';
export type CheckboxSelectionAreaSkin = 'filled' | 'outlined';
