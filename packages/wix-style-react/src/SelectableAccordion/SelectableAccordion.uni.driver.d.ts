import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface SelectableAccordionUniDriver extends BaseUniDriver {
  clickItemAt(idx: number): Promise<void>;
  isItemExpandedAt(idx: number): Promise<boolean>;
  isItemDisabledAt(idx: number): Promise<boolean>;
}
