import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';
import { SkeletonGroupSkin } from '../SkeletonGroup';
export interface SkeletonRectangleUniDriver extends BaseUniDriver {
  getWidth(): Promise<string>;
  getHeight(): Promise<string>;
  getSkin(): Promise<SkeletonGroupSkin>;
}
