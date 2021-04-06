import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface AnalyticsSummaryCardUniDriver extends BaseUniDriver {
  clickCTA(): Promise<void>;
}
