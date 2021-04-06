import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

import { dataHooks } from './constants';

export const getPrefix = base => base.$(`[data-hook="${dataHooks.prefix}"]`);
export const getSuffix = base => base.$(`[data-hook="${dataHooks.suffix}"]`);

export default base => {
  return {
    ...baseUniDriverFactory(base),

    getText: () => base.text(),
    getPrefix: () => getPrefix(base),
    getSuffix: () => getSuffix(base),

    hover: () => base.hover(),
  };
};
