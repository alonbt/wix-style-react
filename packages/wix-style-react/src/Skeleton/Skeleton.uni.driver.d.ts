import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';
import { SkeletonSpacing, SkeletonContentSize, SkeletonAlignment } from '.';

export interface SkeletonUniDriver extends BaseUniDriver {
  getNumLines: () => Promise<number>;
  hasSpacing: (spacing: SkeletonSpacing) => Promise<boolean>;
  hasSizes: (sizes: SkeletonContentSize) => Promise<boolean>;
  hasAlignment: (alignment: SkeletonAlignment) => Promise<boolean>;
}
