import * as React from 'react';

export interface SidebarHeaderProps {
  dataHook?: string;
  title?: string;
  subtitle?: string;
}

export default class SidebarHeader extends React.PureComponent<SidebarHeaderProps> {}
