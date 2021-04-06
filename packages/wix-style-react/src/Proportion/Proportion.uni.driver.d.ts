import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';

export interface ProportionUniDriver extends BaseUniDriver {
  getAspectRatio: () => Promise<number>;
  isAspectRatioDisabled: () => Promise<boolean>;
}
