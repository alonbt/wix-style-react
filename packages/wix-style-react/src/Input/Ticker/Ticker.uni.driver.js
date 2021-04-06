import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { dataHooks } from './constants';

export const tickerDriverFactory = base => {
  const upTicker = base.$(`[data-hook="${dataHooks.tickerUp}"]`);
  const downTicker = base.$(`[data-hook="${dataHooks.tickerDown}"]`);

  return {
    ...baseUniDriverFactory(base),
    clickUp: () => upTicker.click(),
    clickDown: () => downTicker.click(),
    isUpDisabled: async () => (await upTicker.attr('data-disabled')) === 'true',
    isDownDisabled: async () =>
      (await downTicker.attr('data-disabled')) === 'true',
  };
};
