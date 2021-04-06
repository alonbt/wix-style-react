import * as React from 'react';

type chartData = {
  label: Date;
  value: number;
};

export interface SparklineChartProps {
  dataHook?: string;
  className?: string;
  data: chartData[];
  color?: string;
  width?: number;
  height?: number;
  highlightedStartingIndex?: number;
  getTooltipContent?: (index: number) => React.ReactNode;
  onHover?: (index: number) => void;
  animationDuration?: number;
}

export default class SparklineChart extends React.PureComponent<SparklineChartProps> {}
