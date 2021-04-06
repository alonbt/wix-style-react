import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface MarketingPageLayoutContentUniDriver extends BaseUniDriver {
  hasOverline(): Promise<boolean>;
  getOverlineText(): Promise<string>;
  hasTitle(): Promise<boolean>;
  getTitleText(): Promise<string>;
  hasSubtitle(): Promise<boolean>;
  getSubtitleText(): Promise<string>;
  hasContent(): Promise<boolean>;
  getContentText(): Promise<string>;
  hasActions(): Promise<boolean>;
  childExists(): Promise<boolean>;
}
