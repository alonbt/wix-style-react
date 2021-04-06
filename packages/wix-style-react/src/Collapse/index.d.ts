import * as React from 'react';

export interface CollapseProps {
  dataHook?: string;
  children?: React.ReactNode;
  open?: boolean;
}

export default class Collapse extends React.Component<CollapseProps> {}
