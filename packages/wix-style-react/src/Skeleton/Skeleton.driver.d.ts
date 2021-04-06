import { BaseDriver } from 'wix-ui-test-utils/driver-factory';
import { SkeletonSpacing, SkeletonContentSize, SkeletonAlignment } from '.';

export interface SkeletonDriver extends BaseDriver {
  getNumLines: () => number;
  hasSpacing: (spacing: SkeletonSpacing) => boolean;
  hasSizes: (sizes: SkeletonContentSize) => boolean;
  hasAlignment: (alignment: SkeletonAlignment) => boolean;
}
