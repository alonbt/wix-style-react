import * as React from 'react';
import { InputStatus } from '../Input';
import { TooltipCommonProps } from '../common';

export enum ListItemEditableSize {
  SMALL = 'small',
  MEDIUM = 'medium',
}

export enum ListItemEditableMargins {
  LIST_ITEM = 'list-item',
  NONE = 'none',
}

export interface ListItemEditableProps {
  dataHook?: string;
  className?: string;
  placeholder?: string;
  onApprove(value: string): void;
  onCancel(): void;
  cancelButtonTooltipContent?: React.ReactNode;
  cancelButtonTooltipProps?: TooltipCommonProps;
  approveButtonTooltipContent?: React.ReactNode;
  approveButtonTooltipProps?: TooltipCommonProps;
  size?: ListItemEditableSize;
  status?: InputStatus;
  statusMessage?: React.ReactNode;
  margins?: ListItemEditableMargins;
}

export const listItemEditableBuilder: (data: {
  id: string | number;
  dataHook?: string;
  className?: string;
  placeholder?: string;
  onApprove(value: string): void;
  onCancel(): void;
  cancelButtonTooltipContent?: React.ReactNode;
  cancelButtonTooltipProps?: TooltipCommonProps;
  approveButtonTooltipContent?: React.ReactNode;
  approveButtonTooltipProps?: TooltipCommonProps;
  size?: ListItemEditableSize;
  status?: InputStatus;
  statusMessage?: React.ReactNode;
  margins?: ListItemEditableMargins;
}) => {
  id: string | number;
  disabled: true;
  overrideOptionStyle: true;
  value: (props?: Partial<ListItemEditableProps>) => React.ReactNode;
};

export default class ListItemEditable extends React.PureComponent<ListItemEditableProps> {}
