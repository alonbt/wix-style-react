import * as React from 'react';

export interface TableToolbarProps {
  children: React.ReactNode;
}

interface ItemGroupProps {
  children: React.ReactNode;
  position?: string;
}

interface ItemProps {
  children: React.ReactNode;
  layout?: string;
}

interface TitleProps {
  children: React.ReactNode;
  dataHook?: string;
}

interface LabelProps {
  children: React.ReactNode;
}

interface DividerProps {}

interface SelectedCountProps {
  children: React.ReactNode;
  dataHook?: string;
}

declare const ItemGroup: React.SFC<ItemGroupProps>;
declare const Item: React.SFC<ItemProps>;
declare const Title: React.SFC<TitleProps>;
declare const Label: React.SFC<LabelProps>;
declare const Divider: React.SFC<DividerProps>;
declare const SelectedCount: React.SFC<SelectedCountProps>;

export const TableToolbar: React.SFC<TableToolbarProps> & {
  ItemGroup: typeof ItemGroup;
  Item: typeof Item;
  Title: typeof Title;
  Label: typeof Label;
  Divider: typeof Divider;
  SelectedCount: typeof SelectedCount;
};

export default TableToolbar;
