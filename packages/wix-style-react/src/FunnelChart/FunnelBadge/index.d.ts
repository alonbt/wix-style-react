import * as React from 'react';

export interface FunnelBadgeProps {
  value: string;
  tooltipContent?: React.ReactNode;
  onTooltipShow?(): void;
}

export default class FunnelBadge extends React.PureComponent<FunnelBadgeProps> {}
