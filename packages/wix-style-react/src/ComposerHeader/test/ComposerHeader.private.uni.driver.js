import publicDriverFactory from '../ComposerHeader.uni.driver';
import { dataHooks } from '../constants';

export const composerHeaderPrivateDriverFactory = base => {
  const byHook = dataHook => base.$(`[data-hook="${dataHook}"]`);
  return {
    ...publicDriverFactory(base),
    isLeftDividerExists: async () => byHook(dataHooks.leftDivider).exists(),
    isRightDividerExists: async () => byHook(dataHooks.rightDivider).exists(),
  };
};
