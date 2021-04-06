import { baseUniDriverFactory, findByHook } from '../../test/utils/unidriver';
import { dataHooks } from './constants';

export const analyticsSummaryCardDriverFactory = (base, body) => {
  return {
    ...baseUniDriverFactory(base, body),

    /**
     * Click on CTA
     * @returns {Promise<React.MouseEventHandler<HTMLButtonElement>>}
     */
    clickCTA: async () => {
      await base.hover();
      await findByHook(base, dataHooks.analyticsSummaryCardCTA).click();
    },
  };
};
