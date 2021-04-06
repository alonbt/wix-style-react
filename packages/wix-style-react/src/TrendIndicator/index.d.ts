import * as React from 'react';

export interface TrendIndicatorProps {
  dataHook?: string;
  className?: string;
  value: number;
  inverted?: boolean;
}

export default class TrendIndicator extends React.PureComponent<TrendIndicatorProps> {}
