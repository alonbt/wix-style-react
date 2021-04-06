import {
  baseUniDriverFactory,
  findByHookAtIndex,
} from '../../test/utils/unidriver';
import { tooltipDriverFactory } from '../Tooltip/Tooltip.uni.driver';
import { dataHooks } from './constants';

export const stackedBarChartDriverFactory = (base, body) => {
  return {
    ...baseUniDriverFactory(base, body),

    /**
     * Gets tooltip value at index
     * @param {number} index Item index
     * @return {Promise<any>}
     */
    getTooltipContentAt: async index => {
      const tooltipElement = await findByHookAtIndex(
        base,
        dataHooks.tooltip,
        index,
      );
      const tooltipTestkit = tooltipDriverFactory(tooltipElement, body);

      return await tooltipTestkit.getTooltipText();
    },
  };
};
