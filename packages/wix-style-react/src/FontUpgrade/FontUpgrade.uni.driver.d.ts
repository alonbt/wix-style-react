import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface FontUpgradeUniDriver extends BaseUniDriver {
  getElement(selector: string): Promise<any>;
  isActive(): Promise<boolean>;
}
