import * as React from 'react';

export interface DropdownLayoutProps {
  dataHook?: string;
  className?: string;
  dropDirectionUp?: boolean;
  focusOnSelectedOption?: boolean;
  onClose?: () => void;
  onSelect?: (
    option: DropdownLayoutValueOption,
    sameOptionWasPicked: boolean,
  ) => void;
  onOptionMarked?: (option: DropdownLayoutValueOption | null) => void;
  visible?: boolean;
  options?: DropdownLayoutOption[];
  selectedId?: string | number;
  tabIndex?: number;
  onClickOutside?: (e: TouchEvent | MouseEvent) => void;
  fixedHeader?: React.ReactNode;
  fixedFooter?: React.ReactNode;
  maxHeightPixels?: string | number;
  minWidthPixels?: string | number;
  withArrow?: boolean;
  closeOnSelect?: boolean;
  onMouseEnter?: React.MouseEventHandler<HTMLElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLElement>;
  itemHeight?: DropdownLayoutItemHeight;
  selectedHighlight?: boolean;
  inContainer?: boolean;
  infiniteScroll?: boolean;
  loadMore?: (page: number) => void;
  hasMore?: boolean;
  markedOption?: boolean | string | number;
  overflow?: Overflow;
  focusOnOption?: string | number;
}

export type Overflow = 'visible' | 'hidden' | 'scroll' | 'auto';

export default class DropdownLayout extends React.PureComponent<DropdownLayoutProps> {
  static NONE_SELECTED_ID: NoneSelectedId;
}

type NoneSelectedId = -1;

export type DropdownLayoutOption =
  | DropdownLayoutValueOption
  | DropdownLayoutDividerOption;

export type DropdownLayoutValueOption = {
  id: string | number;
  value: React.ReactNode | string | RenderOptionFn;
  disabled?: boolean;
  title?: boolean;
  linkTo?: string;
  overrideStyle?: boolean;
  overrideOptionStyle?: boolean;
  label?: string;
};

export type RenderOptionFn = (options: {
  selected: boolean;
  hovered: boolean;
  disabled: boolean;
}) => JSX.Element;

export type DropdownLayoutDividerOption = {
  value: '-';
  id?: string | number;
};

export type DropdownLayoutItemHeight = 'small' | 'big';
