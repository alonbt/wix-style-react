import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';
import { FillPreviewUniDriver } from '../FillPreview/FillPreview.uni.driver';

export interface SwatchesUniDriver extends BaseUniDriver {
  getSwatchCount: () => Promise<number>;
  getSwatch: (index: number) => Promise<FillPreviewUniDriver>;
  clickEmptySwatch: () => Promise<void>;
  isSwatchSelectedAt: (index: number) => Promise<boolean>;
  isEmptySwatchSelected: () => Promise<boolean>;
  addButtonExists: () => Promise<boolean>;
}
