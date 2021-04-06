import * as React from 'react';
import { IconElement, TooltipCommonProps } from '../common';

import { ButtonWithAsProp } from '../Button';

export type TextButtonProps = ButtonWithAsProp<{
  className?: string;
  skin?: TextButtonSkin;
  underline?: TextButtonUnderline;
  weight?: TextButtonWeight;
  size?: TextButtonSize;
  suffixIcon?: IconElement;
  prefixIcon?: IconElement;
  disabled?: boolean;
  dataHook?: string;
  fluid?: boolean;
  ellipsis?: boolean;
  showTooltip?: boolean;
  tooltipProps?: TooltipCommonProps;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  ariaHaspopup?: string;
  ariaExpanded?: boolean;
}>;

export default class TextButton extends React.Component<TextButtonProps> {}

export type TextButtonSkin =
  | 'standard'
  | 'light'
  | 'premium'
  | 'dark'
  | 'destructive';
export type TextButtonUnderline = 'none' | 'onHover' | 'always';
export type TextButtonWeight = 'thin' | 'normal';
export type TextButtonSize = 'tiny' | 'small' | 'medium';
