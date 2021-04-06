import * as React from 'react';
import Cell from './Cell';

type AnalyticsLayouterChildren = (item: any, index: number, rowItemsCount: number) => React.ReactNode;

export interface AnalyticsLayouterProps {
  dataHook?: string;
  className?: string;
  items: any[];
  children: AnalyticsLayouterChildren;
}

export default class AnalyticsLayout extends React.PureComponent<AnalyticsLayouterProps> {
  static Cell: typeof Cell;
}
