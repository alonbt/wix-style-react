import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';
import { AddressInputItemLayout } from '.';

export interface AddressInputItemUniDriver extends BaseUniDriver {
  getPrefix(): Promise<BaseUniDriver>;
  getMainLabelText(): Promise<string>;
  getSecondaryLabelText(): Promise<string>;
  getSuffix(): Promise<BaseUniDriver>;
}
