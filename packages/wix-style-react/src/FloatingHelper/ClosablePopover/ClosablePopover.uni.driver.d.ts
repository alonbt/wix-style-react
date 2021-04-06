import { PopoverUniDriver } from '../../Popover/Popover.uni.driver';

export interface ClosablePopoverUniDriver extends PopoverUniDriver {
  isOpened(): Promise<boolean>;
}
