import addItemDriverFactory from '../AddItem.driver';
import { tooltipDriverFactory } from 'wix-ui-core/dist/src/components/tooltip/Tooltip.driver';

export const addItemPrivateDriverFactory = ({ element, eventTrigger }) => {
  const tooltipTestkit = tooltipDriverFactory({ element, eventTrigger });

  return {
    ...addItemDriverFactory({ element, eventTrigger }),
    tooltipElementExists: () => tooltipTestkit.exists(),
    getTooltipText: () => {
      tooltipTestkit.mouseEnter();
      const text = tooltipTestkit.getContentElement();
      tooltipTestkit.mouseLeave();
      return text;
    },
  };
};
