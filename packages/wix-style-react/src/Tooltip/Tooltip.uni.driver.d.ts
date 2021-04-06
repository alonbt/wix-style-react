import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';
import { TooltipSize } from '.';

export interface TooltipUniDriver extends BaseUniDriver {
  tooltipExists(): Promise<boolean>;
  mouseEnter(): Promise<void>;
  mouseLeave(): Promise<void>;
  getTooltipText(): Promise<string>;
  clickOutside(): Promise<void>;
  hasSize: (sizeName: TooltipSize) => Promise<boolean>;
}
