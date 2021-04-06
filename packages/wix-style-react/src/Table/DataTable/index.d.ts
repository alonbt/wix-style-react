import * as React from 'react';
import { PopoverCommonProps } from '../../common';

export type RowDataDefaultType = any;
export interface DataTableProps<RowData = RowDataDefaultType> {
  dataHook?: string;
  id?: string;
  data?: RowData[];
  columns: DataTableColumn[];
  showHeaderWhenEmpty?: boolean;
  rowDataHook?: string | DataTableRowDataHookFn;
  rowClass?: string;
  dynamicRowClass?: (rowData: RowData, rowNum: number) => string;
  isRowSelected?: (rowData: RowData, rowNum: number) => boolean;
  isRowHighlight?: (rowData: RowData, rowNum: number) => boolean;
  onRowClick?: (rowData: RowData, rowNum: number) => void;
  onMouseEnterRow?: (rowData: RowData, rowNum: number) => void;
  onMouseLeaveRow?: (rowData: RowData, rowNum: number) => void;
  onSortClick?: (column: DataTableColumn, colNum: number) => void;
  infiniteScroll?: boolean;
  itemsPerPage?: number;
  width?: string;
  skin?: DataTableSkin;
  loadMore?: () => void;
  hasMore?: boolean;
  loader?: React.ReactNode;
  useWindow?: boolean;
  scrollElement?: HTMLElement | React.RefObject<any>;
  rowVerticalPadding?: DataTableRowVerticalPadding;
  rowDetails?: (rowData: RowData, rowNum: number) => React.ReactNode;
  allowMultiDetailsExpansion?: boolean;
  hideHeader?: boolean;
  showLastRowDivider?: boolean;
  virtualized?: boolean;
  virtualizedTableHeight?: number;
  virtualizedLineHeight?: number;
  virtualizedListRef?: React.LegacyRef<any>;
  selectedRowsIds?: (string | number)[];
  horizontalScroll?: boolean;
  stickyColumns?: number;
  isRowDisabled?: (rowData: RowData) => boolean;
}

export default class DataTable<
  RowData = RowDataDefaultType
> extends React.Component<DataTableProps<RowData>> {}

export type DataTableColumnAlign = 'start' | 'center' | 'end';
export type DataTableRowDataHookFn<RowData = RowDataDefaultType> = (
  rowData: RowData,
  rowNum: number,
) => string;
export type DataTableSkin = 'standard' | 'neutral';
export type DataTableRowVerticalPadding = 'tiny' | 'small' | 'medium' | 'large';
export interface PopoverPropsWithContent extends PopoverCommonProps {
  content?: React.ReactNode;
}
export type DataTableColumn<RowData = RowDataDefaultType> = {
  title: React.ReactNode;
  render: (row: RowData, rowNum: number) => React.ReactNode;
  width?: string | number;
  important?: boolean;
  sortable?: boolean;
  sortDescending?: boolean;
  style?: React.CSSProperties;
  infoTooltipProps?: PopoverPropsWithContent;
  align?: DataTableColumnAlign;
  stickyActionCell?: boolean;
};
