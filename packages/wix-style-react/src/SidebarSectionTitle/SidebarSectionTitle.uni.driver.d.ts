import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';

export interface SidebarSectionTitleUniDriver extends BaseUniDriver {
  getText: () => Promise<string>;
}
