import { fillButtonDriverFactory as publicDriverFactory } from '../FillButton.uni.driver';
import { dataHooks } from '../constants';

export const fillButtonPrivateDriverFactory = (base, body) => {
  const byHook = dataHook => `[data-hook="${dataHook}"]`;
  return {
    ...publicDriverFactory(base, body),
    isIconSmall: () => base.$(byHook(dataHooks.iconSmall)).exists(),
    isIconMedium: () => base.$(byHook(dataHooks.iconMedium)).exists(),
  };
};
