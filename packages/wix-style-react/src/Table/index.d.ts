import * as React from 'react';

import {
  DataTableColumn,
  DataTableProps,
  RowDataDefaultType,
} from './DataTable';
import EmptyState from '../EmptyState';

export interface TableProps<RowData = RowDataDefaultType>
  extends UsedDataTableProps<RowData> {
  dataHook?: string;
  onSelectionChanged?: OnSelectionChangedFn;
  showSelection?: boolean;
  hideBulkSelectionCheckbox?: boolean;
  selectedIds?: string[] | number[];
  selectionDisabled?: boolean | SelectionDisabledFn<RowData>;
  deselectRowsByDefault?: boolean;
  withWrapper?: boolean;
  onSortClick?(colData: TableColumn, colNum: number): void;
  totalSelectableCount?: number;
  columns: TableColumn<RowData>[];
}

declare const ToolbarContainer: React.SFC;
declare const SubToolbar: React.FunctionComponent<{ dataHook?: string }>;
declare const Titlebar: React.SFC<{ dataHook?: string }>;
declare const Content: React.SFC<{
  titleBarVisible?: boolean;
  dataHook?: string;
}>;
declare const BulkSelectionCheckbox: React.SFC<{ dataHook: string }>;

export type TableColumn<
  RowDataType = RowDataDefaultType
> = DataTableColumn<RowDataType>;

export type OnSelectionChangedFn = (
  selectedIds: TableProps['selectedIds'] | null,
  change:
    | {
        type: 'SINGLE_TOGGLE';
        id: string;
        value: boolean;
        origin: string;
      }
    | {
        type: 'ALL' | 'NONE';
        origin: string;
      },
) => void;

export type SelectionDisabledFn<RowData = RowDataDefaultType> = (rowData: RowData) => void;

export type UsedDataTableProps<RowData = RowDataDefaultType> = Pick<
  DataTableProps<RowData>,
  | 'allowMultiDetailsExpansion'
  | 'dynamicRowClass'
  | 'isRowHighlight'
  | 'hasMore'
  | 'hideHeader'
  | 'id'
  | 'infiniteScroll'
  | 'itemsPerPage'
  | 'loader'
  | 'loadMore'
  | 'onRowClick'
  | 'onMouseEnterRow'
  | 'onMouseLeaveRow'
  | 'useWindow'
  | 'scrollElement'
  | 'rowVerticalPadding'
  | 'rowDetails'
  | 'rowDataHook'
  | 'rowClass'
  | 'showHeaderWhenEmpty'
  | 'showLastRowDivider'
  | 'virtualized'
  | 'virtualizedTableHeight'
  | 'virtualizedLineHeight'
  | 'virtualizedListRef'
  | 'width'
  | 'skin'
  | 'data'
  | 'horizontalScroll'
  | 'stickyColumns'
  | 'isRowDisabled'
>;

export default class Table<
  RowData = RowDataDefaultType
> extends React.Component<TableProps<RowData>> {
  static ToolbarContainer: typeof ToolbarContainer;
  static Titlebar: typeof Titlebar;
  static SubToolbar: typeof SubToolbar;
  static Content: typeof Content;
  static EmptyState: typeof EmptyState;
  static BulkSelectionCheckbox: typeof BulkSelectionCheckbox;

  setSelectedIds: (selectedIds: TableProps['selectedIds']) => void;
}
