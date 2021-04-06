import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';

export interface FillButtonUniDriver extends BaseUniDriver {
  getTooltipText: () => Promise<string>;
}
