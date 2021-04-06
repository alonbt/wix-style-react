import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface StackedBarChartUniDriver extends BaseUniDriver {
  getTooltipContentAt(index: number): Promise<any>;
}
