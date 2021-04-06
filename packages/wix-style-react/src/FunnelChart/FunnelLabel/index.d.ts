import * as React from 'react';

export interface FunnelLabelProps {
  value?: number;
  label: string;
  displayValue?: string;
}

export default class FunnelLabel extends React.PureComponent<FunnelLabelProps> {}
