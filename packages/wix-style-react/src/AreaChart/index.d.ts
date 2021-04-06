import * as React from 'react';

export interface AreaChartProps {
  dataHook?: string;
  className?: string;
  data: IDatasetItem[];
  tooltipContent?(item: IDatasetItem, index: number): string | string[];
  onTooltipShow?(item: IDatasetItem): void;
  maxYTicksLimit?: number;
}

export interface IDatasetItem {
  value: number;
  label: string;
}

export default class AreaChart extends React.PureComponent<AreaChartProps> {}
