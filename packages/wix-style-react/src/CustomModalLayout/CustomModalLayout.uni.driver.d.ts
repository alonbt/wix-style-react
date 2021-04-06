import { BaseModalLayoutUniDriver } from '../BaseModalLayout/BaseModalLayout.uni.driver';
import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';

export interface CustomModalLayoutUniDriver extends BaseModalLayoutUniDriver {
  hasContentPadding(): Promise<boolean>;
}

export const customModalLayoutDriverFactory: (
  base: BaseUniDriver,
) => CustomModalLayoutUniDriver;
