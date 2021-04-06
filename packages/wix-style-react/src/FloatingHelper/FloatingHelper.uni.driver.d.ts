import { ClosablePopoverUniDriver } from './ClosablePopover/ClosablePopover.uni.driver';
import { FloatingHelperContentUniDriver } from './FloatingHelperContent/FloatingHelperContent.uni.driver';

export interface FloatingHelperUniDriver extends ClosablePopoverUniDriver {
  hasCloseButton(): Promise<boolean>;
  clickCloseButton(): Promise<void>;
  getHelperContentDriver(): Promise<FloatingHelperContentUniDriver>;
  getWidth(): Promise<string>;
}
