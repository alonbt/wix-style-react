import * as React from 'react';

type item = {
  label: string;
  values: number[];
};

export interface StackedBarChartProps {
  dataHook?: string;
  className?: string;
  data?: item[];
  tooltipTemplate?: (item: item) => React.ReactNode;
  width?: number;
  height?: number;
  margin?: { top: number; left: number; bottom: number; right: number };
  yAxisTickFormat?: (rawValue: string, parsedValue: string) => string;
}

export default class StackedBarChart extends React.PureComponent<StackedBarChartProps> {}
