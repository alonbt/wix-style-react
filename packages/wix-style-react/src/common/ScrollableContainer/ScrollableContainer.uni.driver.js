import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

export const scrollableContainerDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),
    childExists: dataHook => base.$(`[data-hook="${dataHook}"]`).exists(),
  };
};
