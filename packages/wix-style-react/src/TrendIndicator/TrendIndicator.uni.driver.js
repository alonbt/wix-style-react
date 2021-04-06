import { baseUniDriverFactory, findByHook } from '../../test/utils/unidriver';
import { dataHooks } from './constants';

export const trendIndicatorDriverFactory = (base, body) => {
  return {
    ...baseUniDriverFactory(base, body),

    /**
     * Returns true if trend icon exist
     * @returns {Promise<boolean>}
     */
    hasTrendIndicatorIcon: () =>
      findByHook(base, dataHooks.trendIndicatorIcon).exists(),

    /**
     * Returns true if trend icon is sort up
     * @returns {Promise<boolean>}
     */
    isTrendIndicatorIconUp: () =>
      findByHook(base, dataHooks.trendIndicatorUp).exists(),

    /**
     * Returns true if trend icon is sort down
     * @returns {Promise<boolean>}
     */
    isTrendIndicatorIconDown: () =>
      findByHook(base, dataHooks.trendIndicatorDown).exists(),

    /**
     * Gets trend value
     * @returns {Promise<number>}
     */
    getTrendValue: async () => {
      const text = await findByHook(base, dataHooks.trendIndicatorValue).text();

      return Number(text.replace('%', ''));
    },
  };
};
