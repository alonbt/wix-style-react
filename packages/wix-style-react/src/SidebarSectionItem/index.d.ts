import * as React from 'react';

export interface SidebarSectionItemProps {
  dataHook?: string;
  className?: string;
  children: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  selected?: boolean;
  disabled?: boolean;
  drillable?: boolean;
  alwaysDisplayChevron?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default class SidebarSectionItem extends React.PureComponent<SidebarSectionItemProps> {}
