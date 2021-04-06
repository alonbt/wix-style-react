import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface SocialButtonUniDriver extends BaseUniDriver {
  getText(): Promise<string>;
}
