import { BaseUniDriver, UniDriver } from 'wix-ui-test-utils/unidriver';

export interface CardSubheaderUniDriver extends BaseUniDriver {
  title(): Promise<string>;
  titleNode(): UniDriver;
  suffixNode(): UniDriver;
}
