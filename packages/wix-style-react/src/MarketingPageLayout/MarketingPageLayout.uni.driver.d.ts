import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface MarketingPageLayoutUniDriver extends BaseUniDriver {
  hasContent(): Promise<boolean>;
  hasImage(): Promise<boolean>;
  hasFooter(): Promise<boolean>;
}
