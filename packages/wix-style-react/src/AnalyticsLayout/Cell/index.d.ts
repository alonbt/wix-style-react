import * as React from 'react';

export interface CellProps {
  dataHook?: string;
  disableHighlight?: boolean;
  children: any;
}

export default class Cell extends React.PureComponent<CellProps> {}
