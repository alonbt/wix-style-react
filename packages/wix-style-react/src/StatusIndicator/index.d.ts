import * as React from 'react';

export type StatusIndicatorState = 'error' | 'warning' | 'loading';
export type StatusIndicatorTooltipPlacement =
  | 'top'
  | 'right'
  | 'bottom'
  | 'left';

export interface StatusIndicatorProps {
  dataHook?: string;
  className?: string;
  status?: StatusIndicatorState;
  message?: string;
  tooltipPlacement?: StatusIndicatorTooltipPlacement;
}

export default class StatusIndicator extends React.PureComponent<StatusIndicatorProps> {}
