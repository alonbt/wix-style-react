import * as React from 'react';

export interface FluidColumnsProps {
  dataHook?: string;
  className?: string;
  cols?: number;
  children: React.ReactNode;
}

export default class FluidColumns extends React.PureComponent<FluidColumnsProps> {}
