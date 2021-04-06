import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface FunnelChartUniDriver extends BaseUniDriver {
  getItemsCount(): Promise<number>;
  getValueAt(index: number): Promise<string>;
  getLabelAt(index: number): Promise<string>;
  getDifferenceFromDataAt(index: number): Promise<string>;
  getDifferenceTooltipFromDataAt(index: number): Promise<string>;
  isDisplayingBadges(): Promise<boolean>;
}
