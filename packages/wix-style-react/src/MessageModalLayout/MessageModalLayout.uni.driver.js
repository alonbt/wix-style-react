import { baseModalLayoutDriverFactory } from '../BaseModalLayout/BaseModalLayout.uni.driver';

export const messageModalLayoutDriverFactory = base => {
  return {
    ...baseModalLayoutDriverFactory(base),
  };
};
