import * as React from 'react';

export interface ProportionProps {
  dataHook?: string;
  className?: string;
  aspectRatio?: number | string;
  children: React.ReactNode;
}

export default class Proportion extends React.Component<ProportionProps> {}
