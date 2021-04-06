import { baseUniDriverFactory, findByHook } from '../../test/utils/unidriver';
import { tooltipDriverFactory } from '../Tooltip/Tooltip.uni.driver';
import { dataHooks } from './constants';

export const checkToggleDriverFactory = (base, body) => {
  const getTooltipDriver = () =>
    tooltipDriverFactory(findByHook(base, dataHooks.tooltip), body);

  return {
    ...baseUniDriverFactory(base, body),

    /**
     * Checks whether CheckToggle is checked
     * @returns {Promise<boolean>}
     */
    isChecked: () => findByHook(base, dataHooks.toggle)._prop('checked'),

    /**
     * Clicks on the element
     * @returns {Promise<void>}
     */
    click: async () => {
      const input = await findByHook(base, dataHooks.toggle);

      // eslint-disable-next-line no-restricted-properties
      const isDisabled = await input._prop('disabled');

      // In order to simulate a real user event, we need to check if the input is disabled before clicking.
      if (!isDisabled) await input.click();
    },

    /**
     * Gets the tooltip content, throws an error if content is not provided.
     * @returns {Promise<string>}
     * */
    getTooltipContent: async () => {
      const tooltipDriver = getTooltipDriver();
      if (await tooltipDriver.exists()) {
        await tooltipDriver.mouseEnter();
        return await tooltipDriver.getTooltipText();
      } else {
        throw new Error(`Message was not provided`);
      }
    },
  };
};
