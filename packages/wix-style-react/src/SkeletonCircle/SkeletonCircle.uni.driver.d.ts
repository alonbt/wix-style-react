import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';
import { SkeletonGroupSkin } from '../SkeletonGroup';

export interface SkeletonCircleUniDriver extends BaseUniDriver {
  getDiameter(): Promise<string>;
  getSkin(): Promise<SkeletonGroupSkin>;
}
