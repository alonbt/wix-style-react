import * as React from 'react';

export type ModalSelectorLayoutSingleProps = {
  onOk?: (selectedItem: ModalSelectorLayoutItem) => void;
  multiple?: false;
};

export type ModalSelectorLayoutMultipleProps = {
  onOk?: (selectedItems: ModalSelectorLayoutItem[]) => void;
  multiple: true;
};

export type ModalSelectorLayoutProps = ModalSelectorLayoutCommonProps &
  (ModalSelectorLayoutSingleProps | ModalSelectorLayoutMultipleProps);

export type ModalSelectorLayoutCommonProps = {
  dataHook?: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
  onCancel?: React.MouseEventHandler<HTMLButtonElement>;
  dataSource: ModalSelectorLayoutDatasourceFn;
  cancelButtonText?: string;
  okButtonText?: string;
  imageSize?: ModalSelectorLayoutImageSize;
  imageShape?: ModalSelectorLayoutImageShape;
  searchPlaceholder?: string;
  emptyState?: React.ReactNode;
  noResultsFoundStateFactory?: (searchValue: string) => React.ReactNode;
  itemsPerPage?: number;
  withSearch?: boolean;
  searchDebounceMs?: number;
  height?: string;
  maxHeight?: string;
  selectAllText?: string;
  deselectAllText?: string;
  disableConfirmation?: boolean;
  onSelect?: (item: ModalSelectorLayoutItem) => void;
  sideActions?: React.ReactNode;
};

export default class ModalSelectorLayout extends React.PureComponent<ModalSelectorLayoutProps> {}

export type ModalSelectorLayoutDatasourceFn = (
  searchQuery: string,
  offset: number,
  limit: number,
) => Promise<{ items: ModalSelectorLayoutItem[]; totalCount: number }>;

export interface ModalSelectorLayoutItem {
  id: number | string;
  title: React.ReactNode;
  subtitle?: string;
  extraText?: string;
  extraNode?: React.ReactNode;
  disabled?: boolean;
  selected?: boolean;
  image?: React.ReactNode;
  subtitleNode?: React.ReactNode;
  belowNode?: React.ReactNode;
  showBelowNodeOnSelect?: boolean;
}

export type ModalSelectorLayoutImageSize =
  | 'tiny'
  | 'small'
  | 'portrait'
  | 'large'
  | 'cinema';

export type ModalSelectorLayoutImageShape = 'rectangular' | 'circle';
