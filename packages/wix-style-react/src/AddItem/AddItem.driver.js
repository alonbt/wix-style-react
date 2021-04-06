import textDriverFactory from '../Text/Text.driver';
import { tooltipDriverFactory } from 'wix-ui-core/dist/src/components/tooltip/Tooltip.driver';
import { dataHooks } from './constants';

const addItemDriverFactory = ({ element, eventTrigger }) => {
  const byHook = hook => element.querySelector(`[data-hook*="${hook}"]`);
  const tooltipTestkit = tooltipDriverFactory({
    element,
    eventTrigger,
  });
  const textDriver = () =>
    textDriverFactory({ element: byHook(dataHooks.itemText) });

  const subtitleTextDriver = () =>
    textDriverFactory({ element: byHook(dataHooks.itemSubtitle) });

  const baseElement = element.querySelector(
    `[data-hook="${dataHooks.addItem}"]`,
  );

  return {
    /** returns true if element in the DOM */
    exists: () => !!baseElement,

    /** returns the driver element */
    element: () => baseElement,

    /** returns value of action text */
    getText: () => textDriver().getText(),

    /** true if passed children in string exists */
    textExists: () => textDriver().exists(),

    /** returns value of tooltip content */
    getTooltipContent: () => {
      tooltipTestkit.mouseEnter();
      const text = tooltipTestkit.getContentElement().textContent;
      tooltipTestkit.mouseLeave();
      return text;
    },
    /** clicks on element */
    click: () => eventTrigger.click(baseElement),

    /** returns value of subtitle */
    getSubtitle: () => subtitleTextDriver().getText(),
  };
};

export default addItemDriverFactory;
