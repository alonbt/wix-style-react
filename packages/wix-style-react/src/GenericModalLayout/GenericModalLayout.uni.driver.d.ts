import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';

export interface GenericModalLayoutUniDriver extends BaseUniDriver {
  isFullscreen: () => Promise<boolean>;
}
