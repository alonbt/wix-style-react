import { announcementModalLayoutDriverFactory } from '../AnnouncementModalLayout.uni.driver';
import { baseModalLayoutPrivateDriverFactory } from '../../BaseModalLayout/test/BaseModalLayout.private.uni.driver';

export const announcementModalLayoutPrivateDriverFactory = base => {
  return {
    ...baseModalLayoutPrivateDriverFactory(base),
    ...announcementModalLayoutDriverFactory(base),
  };
};
