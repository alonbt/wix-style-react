import { BaseDriver } from 'wix-ui-test-utils/driver-factory';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

export interface TabsDriver extends BaseDriver {
  getTitles: () => string[];
  clickTabAt: (index: number) => void;
  getActiveTabIndex: () => number;
  isDefaultType: () => boolean;
  getItemsContainerType: () => string;
  getDataHook: () => string;
  getItemsWidth: () => Set<string>;
  hasDivider: () => boolean;
  getSideContent: (UniDriver | null)[];
  getItemsMaxWidths: () => string[];
}
