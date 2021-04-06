import * as React from 'react';

export type ListItemSelectSizes = 'small' | 'medium';

export interface ListItemSelectProps {
  size?: ListItemSelectSizes;
  dataHook?: string;
  className?: string;
  title?: React.ReactNode;
  suffix?: React.ReactNode;
  ellipsis?: boolean;
  checkbox?: boolean;
  prefix?: React.ReactNode;
  subtitle?: React.ReactNode;
  selected?: boolean;
  disabled?: boolean;
  highlighted?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

declare const ListItemSelect: React.ComponentClass<ListItemSelectProps>;

export const listItemSelectBuilder: (data: {
  id: string | number;
  className?: string;
  checkbox?: boolean;
  prefix?: React.ReactNode;
  title?: string;
  subtitle?: string;
  suffix?: React.ReactNode;
  selected?: boolean;
  disabled?: boolean;
  size?: ListItemSelectSizes;
  ellipsis?: boolean;
  dataHook?: string;
  label?: string;
}) => {
  id: string | number;
  disabled: boolean | undefined;
  overrideOptionStyle: true;
  label: string | undefined;
  value: (props?: Partial<ListItemSelectProps>) => React.ReactNode;
};

export default ListItemSelect;
