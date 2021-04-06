import * as React from 'react';
import { MoveByOffset } from '../common';
import {
  AppendTo,
  Placement,
} from 'wix-ui-core/dist/src/components/popover/Popover.d';
import { DropdownBaseProps } from '../DropdownBase';

export interface PopoverTriggerElementProps {
  onClick: () => void;
  toggle: () => void;
  open: () => void;
  close: (event: React.SyntheticEvent) => void;
  isOpen: boolean;
}

export interface PopoverMenuProps {
  triggerElement: React.ReactNode | React.FC<PopoverTriggerElementProps>;
  children?: React.ReactNode;
  maxWidth?: DropdownBaseProps['maxWidth'];
  minWidth?: DropdownBaseProps['minWidth'];
  maxHeight?: DropdownBaseProps['maxHeight'];
  zIndex?: number;
  moveBy?: MoveByOffset;
  placement?: Placement;
  textSize?: 'small' | 'medium';
  ellipsis?: boolean;
  appendTo?: AppendTo;
  flip?: boolean;
  fixed?: boolean;
  showArrow?: boolean;
  dataHook?: string;
  className?: string;
}

export interface PopoverMenuItemProps {
  text?: React.ReactNode;
  onClick?: () => any;
  skin?: 'dark' | 'destructive';
  prefixIcon?: React.ReactNode;
  dataHook?: string;
  disabled?: boolean;
  subtitle?: string;
}

export interface PopoverMenuDividerProps {
  dataHook?: string;
}

export default class PopoverMenu extends React.PureComponent<PopoverMenuProps> {
  static MenuItem: (props?: PopoverMenuItemProps) => React.ReactElement;
  static Divider: (props?: PopoverMenuDividerProps) => React.ReactElement;
}
