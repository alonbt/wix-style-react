import * as React from 'react';

export interface SidebarSectionTitleProps {
  dataHook?: string;
  children: React.ReactNode;
}

export default class SidebarSectionTitle extends React.PureComponent<SidebarSectionTitleProps> {}
