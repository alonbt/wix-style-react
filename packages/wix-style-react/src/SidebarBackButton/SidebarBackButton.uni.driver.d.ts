import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';

export interface SidebarBackButtonUniDriver extends BaseUniDriver {
  clickButton: () => Promise<void>;
  getButtonText: () => Promise<string>;
}
