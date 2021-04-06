import { wixStyleReactProviderDriverFactory as publicDriverFactory } from '../WixStyleReactProvider.uni.driver';

export const wixStyleReactProviderPrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),
  };
};
