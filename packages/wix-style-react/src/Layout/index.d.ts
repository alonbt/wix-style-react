import * as React from 'react';

export interface LayoutProps {
  dataHook?: string;
  children?: React.ReactNode;
  gap?: React.CSSProperties['gap'];
  cols?: number;
  justifyItems?: React.CSSProperties['justifyItems'];
  alignItems?: React.CSSProperties['alignItems'];
  rowHeight?: React.CSSProperties['gridAutoRows'];
}

export interface CellProps {
  children?: React.ReactNode;
  span?: number;
  vertical?: boolean;
  rows?: number;
}

export const Layout: React.SFC<LayoutProps>;
export default Layout;

export const Cell: React.SFC<CellProps>;
