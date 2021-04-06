import * as React from 'react';
import { IconElement, OmitPolyfill, TooltipCommonProps } from '../common';
import { PopoverMenuProps } from '../PopoverMenu';

type CommonTableActionCellProps = {
  dataHook?: string;
  primaryAction?: TableActionCellPrimaryAction;
  secondaryActions?: TableActionCellSecondaryAction[];
  numOfVisibleSecondaryActions?: number;
  alwaysShowSecondaryActions?: boolean;
  size?: 'small' | 'medium';
};

export type TableActionCellProps = CommonTableActionCellProps & {
  popoverMenuProps?: OmitPolyfill<PopoverMenuProps, 'triggerElement'>;
};

export const TableActionCell: React.SFC<TableActionCellProps>;
export default TableActionCell;

export type TableActionCellPrimaryAction = {
  text: string;
  onClick: () => void;
  skin?: 'standard' | 'inverted';
  disabled?: boolean;
  prefixIcon?: IconElement;
  suffixIcon?: IconElement;
};

export type TableActionCellSecondaryAction = {
  text: string;
  icon: IconElement;
  onClick: () => void;
  disabled?: boolean;
  disabledDescription?: string;
  tooltipProps?: TooltipCommonProps;
  dataHook?: string;
};
