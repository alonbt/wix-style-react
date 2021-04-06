import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

export interface StatisticsWidgetUniDriver extends BaseUniDriver {
  getItemsCount: () => Promise<number>;
  clickStatistics: (index: number) => Promise<void>;
  getValue: (index: number) => Promise<string | null>;
  getValueInShort: (index: number) => Promise<string | null>;
  getDescription: (index: number) => Promise<string | null>;
  getDescriptionInfo: (index: number) => Promise<string>;
  getChildren: (index: number, hook: string) => UniDriver;
  getPercentage: (index: number) => Promise<number | null>;
}
