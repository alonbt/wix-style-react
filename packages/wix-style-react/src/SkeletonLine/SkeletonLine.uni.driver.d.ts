import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';
import { SkeletonGroupSkin } from '../SkeletonGroup';
export interface SkeletonLineUniDriver extends BaseUniDriver {
  getWidth(): Promise<string>;
  getSkin(): Promise<SkeletonGroupSkin>;
}
