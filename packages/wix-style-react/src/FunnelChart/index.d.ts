import * as React from 'react';

export interface FunnelChartItem {
  value?: number;
  label: string;
  displayValue?: string;
}

type percentageDifferenceCbData = {
  currentIndex: number;
  difference: string;
};

export interface FunnelChartProps {
  dataHook?: string;
  className?: string;
  data: FunnelChartItem[];
  hideDifferenceBadge?: boolean;
  differenceBadgeTooltipContent?: ({
    currentIndex,
    difference,
  }: percentageDifferenceCbData) => string;
  onDifferenceBadgeTooltipShow?: ({
    currentIndex,
    difference,
  }: percentageDifferenceCbData) => void;
}

export default class FunnelChart extends React.PureComponent<FunnelChartProps> {}
