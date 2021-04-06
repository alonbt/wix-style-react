import * as React from 'react';
import {
  SelectorListItem,
  SelectorListImageSize,
  SelectorListImageShape,
} from './Content';

export type SelectorListSingleProps = {
  multiple?: false;
};

export type SelectorListMultipleProps = {
  multiple: true;
};

export type SelectorListProps = SelectorListCommonProps &
  (SelectorListSingleProps | SelectorListMultipleProps);

export type SelectorListRenderProp = (args: {
  renderList: () => React.ReactNode;
  renderToggleAllCheckbox: () => React.ReactNode;
  selectedItems: SelectorListItem[];
}) => React.ReactNode;

export type SelectorListCommonProps = {
  dataHook?: string;
  dataSource: SelectorListDatasourceFn;
  imageSize?: SelectorListImageSize;
  imageShape?: SelectorListImageShape;
  searchPlaceholder?: string;
  emptyState?: React.ReactNode;
  renderNoResults?: (searchValue: string) => React.ReactNode;
  itemsPerPage?: number;
  withSearch?: boolean;
  searchDebounceMs?: number;
  height?: string;
  maxHeight?: string;
  onSelect?: (item: SelectorListItem) => void;
  initialAmountToLoad?: number;
  children?: SelectorListRenderProp;
  subtitle?: React.ReactNode;
  selectAllText?: string;
  deselectAllText?: string;
};

export default class SelectorList extends React.PureComponent<SelectorListProps> {
  reloadInitialItems: () => void;
}

export type SelectorListDatasourceFn = (
  searchQuery: string,
  offset: number,
  limit: number,
) => Promise<{ items: SelectorListItem[]; totalCount: number }>;

export { SelectorListItem, SelectorListImageSize, SelectorListImageShape };
