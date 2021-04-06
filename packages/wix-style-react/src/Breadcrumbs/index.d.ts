import * as React from 'react';

export interface BreadcrumbsProps {
  dataHook?: string;
  items: BreadcrumbsItem[];
  onClick?: (item: BreadcrumbsItem) => any;
  activeId?: string | number;
  size?: BreadcrumbsSize;
  itemMaxWidth?: React.CSSProperties['maxWidth'];
  theme?: BreadcrumbsTheme;
}

export default class Breadcrumbs extends React.PureComponent<BreadcrumbsProps> {}

export type BreadcrumbsItem = {
  id: string | number;
  value: React.ReactNode;
  link?: string;
  customElement?: any;
  disabled?: boolean;
};

export type BreadcrumbsSize = 'medium' | 'large';

export type BreadcrumbsTheme =
  | 'onWhiteBackground'
  | 'onGrayBackground'
  | 'onDarkBackground';
