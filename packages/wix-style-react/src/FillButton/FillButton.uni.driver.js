import { baseUniDriverFactory } from '../../test/utils/unidriver';
import { tooltipDriverFactory } from '../Tooltip/Tooltip.uni.driver';
import { dataHooks } from './constants';

export const fillButtonDriverFactory = (base, body) => {
  const tooltipTestkit = tooltipDriverFactory(base, body);
  const byHook = dataHook => `[data-hook="${dataHook}"]`;

  return {
    ...baseUniDriverFactory(base),

    /**
     * clicks on trigger element
     * @return {Promise<void>}
     */
    click: () => base.$(byHook(dataHooks.button)).click(),

    /**
     * Gets the tooltip text
     * @return {Promise<string>}
     */
    getTooltipText: () => tooltipTestkit.getTooltipText(),
  };
};
