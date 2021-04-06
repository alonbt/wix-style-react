import * as React from 'react';

export interface SelectorListItem {
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

export type SelectorListImageSize =
  | 'tiny'
  | 'small'
  | 'portrait'
  | 'large'
  | 'cinema';

export type SelectorListImageShape = 'rectangular' | 'circle';

export type SelectorListContentProps = {
  dataHook?: string;
  items: SelectorListItem[];
  onToggle?: (item: SelectorListItem) => void;
  emptyState?: React.ReactNode;
  renderNoResults?: (searchValue: string) => React.ReactNode;
  isLoading?: boolean;
  checkIsSelected?: (item: SelectorListItem) => boolean;
  isEmpty?: boolean;
  noResultsFound?: boolean;
  imageSize?: SelectorListImageSize;
  imageShape?: SelectorListImageShape;
  multiple?: boolean;
  searchValue: string;
  loadMore: () => void;
  hasMore?: boolean;
};

declare const SelectorListContent: React.FC<SelectorListContentProps>;
export default SelectorListContent;
