import * as React from 'react';

export interface ComposerSidebarItem {
  id: string | number;
  label: string;
  disabled?: boolean;
  icon?: any;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface ComposerSidebarProps {
  dataHook?: string;
  labelPlacement?: string;
  size?: string;
  className?: string;
  selectedId?: number | string;
  items?: ComposerSidebarItem[];
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default class ComposerSidebar extends React.PureComponent<ComposerSidebarProps> {}
