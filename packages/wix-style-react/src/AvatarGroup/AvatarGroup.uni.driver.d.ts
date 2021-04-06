import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

type contentType = 'text' | 'placeholder' | 'image'

export interface AvatarGroupUniDriver extends BaseUniDriver {
  getVisibleAvatarsCount(): Promise<number>;
  getVisibleAvatarTextContentByIndex(index: number): Promise<string>;
  getMoreIndicatorContent(): Promise<string>;
  isMoreIndicatorExist(): Promise<boolean>;
}
