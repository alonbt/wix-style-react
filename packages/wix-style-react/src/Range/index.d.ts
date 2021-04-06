import * as React from 'react';

export interface RangeProps {
  required?: boolean;
  info?: string;
  dataHook?: string;
  style?: string;
  appendToParent?: boolean;
}

export default class Range extends React.Component<RangeProps> {}
