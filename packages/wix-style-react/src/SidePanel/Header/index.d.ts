import * as React from 'react';
import { TooltipCommonProps } from '../../common';

export interface HeaderProps {
  children?: React.ReactNode;
  className?: string;
  title?: React.ReactNode;
  infoTooltipProps?: TooltipCommonProps;
  infoTooltipContent?: React.ReactNode;
  showDivider?: boolean;
}
export default class Header extends React.PureComponent<HeaderProps> {}
