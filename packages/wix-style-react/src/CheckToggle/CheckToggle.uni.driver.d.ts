import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface CheckToggleUniDriver extends BaseUniDriver {
  isChecked(): Promise<boolean>;
  click(): Promise<void>;
  getTooltipContent(): Promise<string>;
}
