import * as React from 'react';

export interface SwatchesProps {
  dataHook?: string;
  colors?: (object | string)[];
  selected?: string;
  onClick?: string | object;
  size?: 'small' | 'medium';
  showClear?: boolean;
  showClearMessage?: React.ReactNode;
  onAdd?: Function;
  onChange?: Function;
  onCancel?: Function;
  showAddButton?: boolean;
  addButtonMessage?: string;
  addButtonIconSize?: 'small' | 'medium';
  columns?: number;
  gap?: number;
}

export default class Swatches extends React.PureComponent<SwatchesProps> {}
