import { customModalLayoutDriverFactory } from '../CustomModalLayout.uni.driver';
import { baseModalLayoutPrivateDriverFactory } from '../../BaseModalLayout/test/BaseModalLayout.private.uni.driver';

export const customModalLayoutPrivateDriverFactory = base => {
  return {
    ...baseModalLayoutPrivateDriverFactory(base),
    ...customModalLayoutDriverFactory(base),
  };
};
