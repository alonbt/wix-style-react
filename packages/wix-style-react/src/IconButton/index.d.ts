import * as React from 'react';
import { ButtonWithAsProp } from '../Button';

export type IconButtonProps = ButtonWithAsProp<{
  className?: string;
  skin?: IconButtonSkin;
  priority?: IconButtonPriority;
  size?: IconButtonSize;
  disabled?: boolean;
  dataHook?: string;
  ariaLabel?: string;
  ariaLabelledBy?: string;
}>;

export default class IconButton extends React.Component<IconButtonProps> {}

export type IconButtonSkin =
  | 'standard'
  | 'inverted'
  | 'light'
  | 'transparent'
  | 'premium';
export type IconButtonPriority = 'primary' | 'secondary';
export type IconButtonSize = 'tiny' | 'small' | 'medium' | 'large';
