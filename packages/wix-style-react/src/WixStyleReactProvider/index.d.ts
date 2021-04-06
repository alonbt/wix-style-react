import * as React from 'react';

export interface WixStyleReactProviderProps {
  dataHook?: string;
  className?: string;
  as?: 'span' | 'div';
  children?: React.ReactNode;
  features?: object;
}

export default class WixStyleReactProvider extends React.PureComponent<WixStyleReactProviderProps> {}

interface Features {
  reducedSpacingAndImprovedLayout: 'reduce-spacing-layout';
}

export const FEATURES: Features;
