import * as React from 'react';
import { ButtonWithAsProp } from '../Button';
import { TooltipCommonProps } from '../common';

export type ToggleButtonProps = ButtonWithAsProp<{
  skin?: ToggleButtonSkin;
  size?: 'tiny' | 'small' | 'medium' | 'large';
  selected?: boolean;
  disabled?: boolean;
  dataHook?: string;
  labelValue?: React.ReactNode;
  labelPlacement?: 'tooltip' | 'bottom' | 'end';
  labelEllipsis?: boolean;
  tooltipProps?: TooltipCommonProps;
  border?: boolean;
  shape?: 'square' | 'round';
}>;

export default class ToggleButton extends React.Component<ToggleButtonProps> {}

export type ToggleButtonSkin =
  | 'standard'
  | 'dark'
  | 'inverted'
  | 'destructive'
  | 'success';
