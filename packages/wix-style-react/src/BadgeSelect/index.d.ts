import * as React from 'react';
import { BadgeSize, BadgeType } from '../Badge';
import { PopoverCommonProps } from '../common';
import BadgeSelectItem from '../BadgeSelectItem';

export interface BadgeSelectProps {
  options: BadgeSelectItem[];
  selectedId?: string;
  onSelect?: (option: BadgeSelectItem) => void;
  size?: BadgeSize;
  type?: BadgeType;
  uppercase?: boolean;
  dataHook?: string;
  popoverProps?: PopoverCommonProps;
}

export default class BadgeSelect extends React.Component<BadgeSelectProps> {
  hideDropdown: () => void;
  showDropdown: () => void;
  toggleDropdown: () => void;
  getSelectedOption: (props: any) => BadgeSelectItem;
}

export { BadgeSelectItem };
