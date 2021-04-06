import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface WixStyleReactProviderUniDriver extends BaseUniDriver {
  isFeatureActive(): Promise<boolean>;
}
