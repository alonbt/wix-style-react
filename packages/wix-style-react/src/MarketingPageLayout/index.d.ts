import * as React from 'react';

export interface MarketingPageLayoutProps {
  dataHook?: string;
  className?: string;
  horizontalSize?: MarketingPageLayoutHorizontalSize;
  verticalSize?: MarketingPageLayoutVerticalSize;
  removeImageHorizontalPadding?: boolean;
  removeImageVerticalPadding?: boolean;
  content?: React.ReactNode;
  image?: React.ReactNode;
  footer?: React.ReactNode;
}

export default class MarketingPageLayout extends React.PureComponent<MarketingPageLayoutProps> {}

export type MarketingPageLayoutHorizontalSize = 'medium' | 'large';
export type MarketingPageLayoutVerticalSize = 'medium' | 'large';
