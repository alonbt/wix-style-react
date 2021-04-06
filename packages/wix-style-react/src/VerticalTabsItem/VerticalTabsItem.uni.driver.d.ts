import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';

export interface VerticalTabsItemUniDriver extends BaseUniDriver {
  getText: () => Promise<string>;
}
