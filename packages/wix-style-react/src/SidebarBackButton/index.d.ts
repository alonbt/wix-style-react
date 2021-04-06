import * as React from 'react';

export interface SidebarBackButtonProps {
  dataHook?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: string;
  animateArrow?: boolean;
}

export default class SidebarBackButton extends React.PureComponent<SidebarBackButtonProps> {}
