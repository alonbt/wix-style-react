import { PopoverDriver } from '../../Popover/Popover.driver';

export interface ClosablePopoverDriver extends PopoverDriver {
  isOpened: () => boolean;
}
