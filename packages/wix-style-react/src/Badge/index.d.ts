import * as React from 'react';
import { InjectedFocusableProps, IconElement } from '../common';

export interface BadgeProps extends InjectedFocusableProps {
  type?: BadgeType;
  skin?: BadgeSkin;
  size?: BadgeSize;
  prefixIcon?: IconElement;
  suffixIcon?: IconElement;
  onClick?: React.EventHandler<React.MouseEvent<HTMLElement>>;
  uppercase?: boolean;
  dataHook?: string;
  className?: string;
}

export default class Badge extends React.PureComponent<BadgeProps> {}

export type BadgeSkin =
  | 'general'
  | 'standard'
  | 'danger'
  | 'success'
  | 'neutral'
  | 'neutralLight'
  | 'warning'
  | 'warningLight'
  | 'urgent'
  | 'neutralStandard'
  | 'neutralSuccess'
  | 'neutralDanger'
  | 'premium';

export type BadgeType = 'solid' | 'outlined' | 'transparent';

export type BadgeSize = 'medium' | 'small';

export const SIZE: { [key in BadgeSize]: BadgeSize };
export const TYPE: { [key in BadgeType]: BadgeType };
export const SKIN: { [key in BadgeSkin]: BadgeSkin };
