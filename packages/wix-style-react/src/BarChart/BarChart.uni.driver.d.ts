import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface BarChartUniDriver extends BaseUniDriver {
  getItemsCount(): Promise<number>;
  getValue(index: number): Promise<string>;
  getValueInShort(index: number): Promise<string>;
  getDescription(index: number): Promise<string>;
  getDescriptionInfo(index: number): Promise<string>;
}
