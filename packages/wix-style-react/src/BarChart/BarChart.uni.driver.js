import {
  baseUniDriverFactory,
  findByHook,
  findByHookAtIndex,
  countByHook,
} from '../../test/utils/unidriver';
import DataHooks from './dataHooks';
import { tooltipDriverFactory } from '../Tooltip/Tooltip.uni.driver';
import { adaptiveHeadingDriverFactory } from '../utils/AdaptiveHeading/AdaptiveHeading.uni.driver';

const barChartDriverFactory = (base, body) => {
  const getTooltipDriver = async index => {
    const item = await findByHookAtIndex(base, DataHooks.bar, index);
    const tooltip = await findByHook(item, DataHooks.tooltip);
    return tooltipDriverFactory(tooltip, body);
  };

  const getAdaptiveHeadingDriver = async index => {
    const item = await findByHookAtIndex(base, DataHooks.bar, index);
    const heading = await findByHook(item, DataHooks.value);

    return adaptiveHeadingDriverFactory(heading);
  };

  return {
    ...baseUniDriverFactory(base),

    /**
     * Gets number of items
     * @return {Promise<number>}
     */
    getItemsCount: () => countByHook(base, DataHooks.bar),

    /**
     * Gets item value at index
     * @param {number} index Item index
     * @return {Promise<string>}
     */
    getValue: async index => (await getAdaptiveHeadingDriver(index)).getText(),

    /**
     * Gets item short value by index
     * @param index Item index
     * @return {Promise<string>}
     */
    getValueInShort: async index =>
      (await getAdaptiveHeadingDriver(index)).getShortText(),

    /**
     * Gets item description by index
     * @param index Item index
     * @return {Promise<string>}
     */
    getDescription: async index =>
      findByHook(
        await findByHookAtIndex(base, DataHooks.bar, index),
        DataHooks.description,
      ).text(),

    /**
     * Gets item tooltip text by index
     * @param index Item index
     * @return {Promise<string>}
     */
    getDescriptionInfo: async index => {
      const tooltip = await getTooltipDriver(index);
      if (!(await tooltip.exists())) {
        return null;
      }

      await tooltip.mouseEnter();
      const text = await tooltip.getTooltipText();
      await tooltip.mouseLeave();

      return text;
    },
  };
};

export default barChartDriverFactory;
