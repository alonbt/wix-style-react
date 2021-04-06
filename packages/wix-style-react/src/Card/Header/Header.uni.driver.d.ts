import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface HeaderUniDriver extends BaseUniDriver {
  title(): Promise<string>;
  subtitle(): Promise<string>;
}
