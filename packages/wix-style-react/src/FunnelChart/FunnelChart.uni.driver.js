import {
  baseUniDriverFactory,
  findByHookAtIndex,
  countByHook,
} from '../../test/utils/unidriver';
import { tooltipDriverFactory } from '../Tooltip/Tooltip.uni.driver';
import { textUniDriverFactory } from '../Text/Text.uni.driver';
import { dataHooks } from './constants';

export const funnelChartDriverFactory = (base, body) => {
  const getTooltipDriverAtIndex = async (dataHook, index) => {
    const tooltip = await findByHookAtIndex(base, dataHook, index);
    return tooltipDriverFactory(tooltip, body);
  };

  const getTextDriverAtIndex = async (dataHook, index) => {
    const text = await findByHookAtIndex(base, dataHook, index);

    return textUniDriverFactory(text, body);
  };
  return {
    ...baseUniDriverFactory(base, body),

    /**
     * Gets number of items
     * @return {Promise<number>}
     */
    getItemsCount: () => countByHook(base, dataHooks.funnelChartItem),

    /**
     * Gets item displayed value (after compaction) at index
     * @param {number} index Item index
     * @return {Promise<string>}
     */
    getValueAt: async index =>
      (await getTextDriverAtIndex(dataHooks.labelValue, index)).getText(),

    /**
     * Gets item label at index
     * @param {number} index Item index
     * @return {Promise<string>}
     */
    getLabelAt: async index =>
      (await getTextDriverAtIndex(dataHooks.labelText, index)).getText(),

    /**
     * Gets badge value from index
     * @param {number} index Item index
     * @return {Promise<string>}
     */
    getDifferenceFromDataAt: async index => {
      const text = await getTextDriverAtIndex(dataHooks.badgeValue, index);
      if (!(await text.exists())) {
        return null;
      }
      return text.getText();
    },

    /**
     * Gets badge tooltip from index
     * @param {number} index Item index
     * @return {Promise<string>}
     */
    getDifferenceTooltipFromDataAt: async index => {
      const tooltip = await getTooltipDriverAtIndex(
        dataHooks.badgeTooltip,
        index,
      );
      if (!(await tooltip.exists())) {
        return null;
      }
      return tooltip.getTooltipText();
    },

    /**
     * Returns true if badges are displayed
     * @return {Promise<boolean>}
     */
    isDisplayingBadges: async () =>
      base.$$(`[data-hook="${dataHooks.badge}"]`).count() > 0,
  };
};
