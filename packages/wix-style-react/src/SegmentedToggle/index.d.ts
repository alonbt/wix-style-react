import * as React from 'react';
import { OmitPolyfill, IconElement } from '../common';

export interface SegmentedToggleProps {
  dataHook?: string;
  defaultSelected?: React.ReactNode;
  selected?: React.ReactNode;
  onClick?: (event: React.SyntheticEvent, value: string) => void;
  disabled?: boolean;
  children: any[];
}

export type SegmentedToggleButtonProps = OmitPolyfill<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'onFocus' | 'onBlur' | 'type'
> & {
  prefixIcon?: IconElement;
  value?: string;
  selected?: boolean;
  disabled?: boolean;
  dataHook?: string;
  focusableOnFocus?: React.FocusEventHandler<HTMLButtonElement>;
  focusableOnBlur?: React.FocusEventHandler<HTMLButtonElement>;
};

export const SegmentedToggleButton: React.SFC<SegmentedToggleButtonProps>;

export type SegmentedToggleIconProps = OmitPolyfill<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'onFocus' | 'onBlur' | 'type'
> & {
  selected?: boolean;
  value?: string;
  tooltipText?: string;
  disabled?: boolean;
  dataHook?: string;
  'data-click'?: string;
  focusableOnFocus?: React.FocusEventHandler<HTMLButtonElement>;
  focusableOnBlur?: React.FocusEventHandler<HTMLButtonElement>;
};
export class SegmentedToggleIcon extends React.Component<SegmentedToggleIconProps> {}

export default class SegmentedToggle extends React.Component<SegmentedToggleProps> {
  static Button: typeof SegmentedToggleButton;
  static Icon: typeof SegmentedToggleIcon;
}
