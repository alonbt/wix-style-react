import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

export interface TabsUniDriver extends BaseUniDriver {
  getTitles: () => Promise<string[]>;
  clickTabAt: (index: number) => Promise<void>;
  getActiveTabIndex: () => Promise<number>;
  isDefaultType: () => Promise<boolean>;
  getItemsContainerType: () => Promise<string>;
  getDataHook: () => Promise<string>;
  getItemsWidth: () => Promise<Set<string>>;
  hasDivider: () => Promise<boolean>;
  getSideContent: Promise<(UniDriver | null)[]>;
  getItemsMaxWidths: () => Promise<string[]>;
}
