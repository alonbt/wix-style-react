import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';

export interface ContactItemBuilderUniDriver extends BaseUniDriver {
  getTitle: () => Promise<string>;
  getSubtitle: () => Promise<string>;
}
