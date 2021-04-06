import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

export interface SidebarSectionItemUniDriver extends BaseUniDriver {
  getText: () => Promise<string>;
  getPrefix: () => UniDriver;
  getSuffix: () => UniDriver;
  hover: () => Promise<void>;
}
