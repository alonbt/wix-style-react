import { messageModalLayoutDriverFactory } from '../MessageModalLayout.uni.driver';
import { baseModalLayoutPrivateDriverFactory } from '../../BaseModalLayout/test/BaseModalLayout.private.uni.driver';

export const messageModalLayoutPrivateDriverFactory = base => {
  return {
    ...baseModalLayoutPrivateDriverFactory(base),
    ...messageModalLayoutDriverFactory(base),
  };
};
