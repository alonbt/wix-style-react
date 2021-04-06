import * as React from 'react';
import { SparklineChartProps } from '../SparklineChart';

export interface AnalyticsSummaryCardProps {
  dataHook?: string;
  className?: string;
  title?: string;
  titleTooltip?: string;
  value: string;
  valueTooltip?: string;

  isTrendVisible?: boolean;
  trend?: number;
  invertedTrend?: boolean;

  isLoading?: boolean;
  ctaButton?: React.ReactNode;
  onCTAClick?: React.MouseEventHandler<HTMLButtonElement>;

  onClick?: React.MouseEventHandler<HTMLButtonElement>;

  onChartHover?: React.MouseEventHandler<HTMLButtonElement>;
  chartHighlightedStartingIndex?: SparklineChartProps['highlightedStartingIndex'];
  chartWidth?: number;
  chartData: SparklineChartProps['data'];
  chartColorHex?: SparklineChartProps['color'];
  getChartTooltipContent?: (index: number) => React.ReactNode;
  footer?: React.ReactNode;
}

export default class AnalyticsSummaryCard extends React.PureComponent<AnalyticsSummaryCardProps> {}
