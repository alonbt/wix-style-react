import * as React from 'react';
import CardFolderTab, { CardFolderTabProps } from './Tab';

export interface CardFolderTabsProps {
  dataHook?: string;
  activeId: string;
  onTabChange?: (newActiveId: string) => void;
  maxTabWidth?: React.CSSProperties['maxWidth'];
}

export default class CardFolderTabs extends React.PureComponent<CardFolderTabsProps> {
  static Tab: (props?: CardFolderTabProps) => React.ReactElement;
}
