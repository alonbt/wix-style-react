import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface MarketingLayoutUniDriver extends BaseUniDriver {
  getTitleText: () => Promise<string>;
  getDescriptionText: () => Promise<string>;
}
