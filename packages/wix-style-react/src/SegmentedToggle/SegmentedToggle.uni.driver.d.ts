import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';

export interface SegmentedToggleUniDriver extends BaseUniDriver {
  selectChild: (hook: string | number) => Promise<void>;
  isSelected: (hook: string | number) => Promise<boolean>;
}
