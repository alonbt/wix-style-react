import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';

export interface AddItemUniDriver extends BaseUniDriver {
  getText: () => Promise<string>;
  textExists: () => Promise<boolean>;
  getTooltipContent: () => Promise<string>;
  getSubtitle: () => Promise<string>;
}
