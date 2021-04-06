import { addItemUniDriverFactory as publicDriverFactory } from '../AddItem.uni.driver';
import { tooltipDriverFactory } from '../../Tooltip/Tooltip.uni.driver';

export const addItemPrivateUniDriverFactory = (base, body) => {
  const tooltipDriver = tooltipDriverFactory(base);

  return {
    ...publicDriverFactory(base, body),
    tooltipElementExists: () => tooltipDriver.exists(),
    mouseEnter: () => tooltipDriver.mouseEnter(),
    getTooltipText: () => tooltipDriver.getTooltipText(),
  };
};
