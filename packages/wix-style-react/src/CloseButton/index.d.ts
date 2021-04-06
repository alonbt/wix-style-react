import * as React from 'react';
import { ButtonWithAsProp } from '../Button';

export type CloseButtonProps = ButtonWithAsProp<{
  className?: string;
  skin?: CloseButtonSkin;
  size?: CloseButtonSize;
  disabled?: boolean;
  dataHook?: string;
}>;

export default class CloseButton extends React.Component<CloseButtonProps> {}

export type CloseButtonSkin =
  | 'standard'
  | 'standardFilled'
  | 'light'
  | 'lightFilled'
  | 'dark'
  | 'transparent';

export type CloseButtonSelectionArea = 'none' | 'hover' | 'always';
export type CloseButtonSize = 'small' | 'medium' | 'large';
