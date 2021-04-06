import * as React from 'react';
import { TooltipCommonProps } from '../common';

export type CheckToggleSize = 'small' | 'medium';

export type CheckToggleSkin = 'standard' | 'success';

export interface CheckToggleProps {
  dataHook?: string;
  className?: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  size?: CheckToggleSize;
  skin?: CheckToggleSkin;
  tooltipContent?: React.ReactNode;
  tooltipProps?: TooltipCommonProps;
}

export default class CheckToggle extends React.PureComponent<CheckToggleProps> {}
