import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { dataHooks } from './constants';

const byDataHook = dataHook => `[data-hook="${dataHook}"]`;

export const sortableGridUniDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),
    startFixedElementExists: async () =>
      base.$(byDataHook(dataHooks.START_FIXED_ELEMENT)).exists(),
    endFixedElementExists: async () =>
      base.$(byDataHook(dataHooks.END_FIXED_ELEMENT)).exists(),
  };
};
