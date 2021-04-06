import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface InfoIconUniDriver extends BaseUniDriver {
  hover(): Promise<void>;
  getSize(): Promise<string>;
  getContent(): Promise<string>;
}
