import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface FluidColumnsUniDriver extends BaseUniDriver {
  getNumberOfItems(): Promise<number>;
}
