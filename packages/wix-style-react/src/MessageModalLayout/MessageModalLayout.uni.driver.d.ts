import { BaseModalLayoutUniDriver } from '../BaseModalLayout/BaseModalLayout.uni.driver';
import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';

export interface MessageModalLayoutUniDriver extends BaseModalLayoutUniDriver {}

export const messageModalLayoutDriverFactory: (
  base: BaseUniDriver,
) => MessageModalLayoutUniDriver;
