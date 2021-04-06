import * as React from 'react';

export interface MarketingPageLayoutContentProps {
  dataHook?: string;
  className?: string;
  size?: MarketingPageLayoutContentSize;
  overline?: React.ReactNode;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  content?: React.ReactNode;
  actions?: React.ReactNode;
}

export default class MarketingPageLayoutContent extends React.PureComponent<MarketingPageLayoutContentProps> {}

export type MarketingPageLayoutContentSize = 'medium' | 'large';
