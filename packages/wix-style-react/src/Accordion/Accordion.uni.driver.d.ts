import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';

export interface AccordionUniDriver extends BaseUniDriver {
  getItemTitleAt: (idx: number) => Promise<string>;
  isIconExistsAt: (idx: number) => Promise<boolean>;
  isItemExpandedAt: (idx: number) => Promise<boolean>;
  clickToggleButtonAt: (idx: number) => Promise<void>;
  clickItemAt: (idx: number) => Promise<void>;
  getToggleButtonLabelAt: (idx: number) => Promise<string>;
}
