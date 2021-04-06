import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';
import { ButtonNextDriver } from 'wix-ui-core/drivers/unidriver';

export interface CloseButtonUniDriver extends BaseUniDriver {
  isButtonDisabled: ButtonNextDriver['isButtonDisabled'];
}
