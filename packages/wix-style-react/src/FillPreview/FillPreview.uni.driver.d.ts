import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';

export interface FillPreviewUniDriver extends BaseUniDriver {
  isSelected: () => Promise<boolean>;
}
