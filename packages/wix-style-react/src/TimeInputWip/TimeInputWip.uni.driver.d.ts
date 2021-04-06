import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface TimeInputWipUniDriver extends BaseUniDriver {
  getValue(): Promise<Date>;
  getStringValue(): Promise<string>;
}
