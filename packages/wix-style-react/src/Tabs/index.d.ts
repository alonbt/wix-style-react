import * as React from 'react';

export interface TabsProps {
  dataHook?: string;
  className?: string;
  activeId?: string | number;
  hasDivider?: boolean;
  items: Item[];
  minWidth?: string | number;
  type?: '' | 'compact' | 'compactSide' | 'uniformSide' | 'uniformFull';
  size?: 'small' | 'medium';
  sideContent?: React.ReactNode;
  width?: string | number;
  onClick?: (item: Item) => void;
}

export type Item = {
  id: string | number;
  title: React.ReactNode;
  dataHook?: string;
};

export default class Tabs extends React.PureComponent<TabsProps> {}
