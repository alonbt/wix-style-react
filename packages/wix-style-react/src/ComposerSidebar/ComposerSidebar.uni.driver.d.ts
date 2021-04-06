import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface ComposerSidebarUniDriver extends BaseUniDriver {
  getSelectedItemId(): Promise<number | string>;
  isItemDisabled(itemId: number | string): Promise<boolean>;
  clickOnItem(itemId: number | string): Promise<void>;
  getItemLabel(itemId: number | string): Promise<string>;
}
