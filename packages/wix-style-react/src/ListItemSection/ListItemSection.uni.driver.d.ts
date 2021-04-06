import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface ListItemSectionUniDriver extends BaseUniDriver {
  getTitle(): Promise<string>;
  getSuffix(): Promise<BaseUniDriver>;
}
