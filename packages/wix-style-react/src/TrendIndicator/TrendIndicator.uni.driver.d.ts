import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface TrendIndicatorUniDriver extends BaseUniDriver {
  hasTrendIndicatorIcon(): Promise<boolean>;
  isTrendIndicatorUp(): Promise<boolean>;
  isTrendIndicatorDown(): Promise<boolean>;
  getTrendValue(): Promise<number>;
}
