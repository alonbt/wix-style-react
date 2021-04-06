import * as React from 'react';
import VerticalTabsItem from '../VerticalTabsItem';

export interface VerticalTabsProps {
  size?: VerticalTabsSize;
  activeTabId?: number;
  onChange?: (id: number) => void;
  dataHook?: string;
}

export type VerticalTabsSize = 'small' | 'medium';

declare const Footer: React.SFC;

declare const TabsGroup: React.SFC<TabsGroup>;
export interface TabsGroup {
  title?: string;
}

export default class VerticalTabs extends React.Component<VerticalTabsProps> {
  static Footer: typeof Footer;
  static TabsGroup: typeof TabsGroup;
  static TabItem: typeof VerticalTabsItem;
}
