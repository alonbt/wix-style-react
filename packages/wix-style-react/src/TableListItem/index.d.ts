import * as React from 'react';
import { FocusEvent } from 'react';

export type TableListItemColumn = {
  value: React.ReactNode;
  width?: string | number;
  align?: 'left' | 'center' | 'right';
};

export interface TableListItemProps {
  dataHook?: string;
  className?: string;
  onClick?: Function;
  options: TableListItemColumn[];
  verticalPadding?: 'small' | 'medium';
  checkbox?: boolean;
  checkboxDisabled?: boolean;
  checked?: boolean;
  focused?: boolean;
  onBlur?(e: FocusEvent): void;
  onKeyUp?(e: KeyboardEvent): void;
  onCheckboxChange?: React.ChangeEventHandler<HTMLInputElement>;
  draggable?: boolean;
  dragging?: boolean;
  dragDisabled?: boolean;
  showDivider?: boolean;
}

export default class TableListItem extends React.PureComponent<TableListItemProps> {}
