import { BaseModalLayoutUniDriver } from '../BaseModalLayout/BaseModalLayout.uni.driver';
import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';

export interface LinkBlockUniDriver {
  exists(): Promise<boolean>;
  getLinkText(): Promise<string>;
  clickLink(): Promise<void>;
}

export interface AnnouncementModalLayoutUniDriver
  extends BaseModalLayoutUniDriver,
    LinkBlockUniDriver {}

export const announcementModalLayoutDriverFactory: (
  base: BaseUniDriver,
) => AnnouncementModalLayoutUniDriver;
