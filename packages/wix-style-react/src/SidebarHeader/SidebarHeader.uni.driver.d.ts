import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

export interface SidebarHeaderUniDriver extends BaseUniDriver {
  getTitle: () => Promise<string>;
  getSubtitle: () => Promise<string>;
  getChildren: () => UniDriver;
}
