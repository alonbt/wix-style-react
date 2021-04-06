import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';

export interface SidebarDividerUniDriver extends BaseUniDriver {
  isFullWidth: () => Promise<boolean>;
}
