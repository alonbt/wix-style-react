import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface SortableGridUniDriver extends BaseUniDriver {
  startFixedElementExists: () => Promise<boolean>;
  endFixedElementExists: () => Promise<boolean>;
}
