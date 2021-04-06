import { tooltipDriverFactory as tooltipDriverFactoryCore } from 'wix-ui-core/dist/src/components/tooltip/Tooltip.uni.driver';
import { baseUniDriverFactory } from '../../test/utils/unidriver';

export const tooltipDriverFactory = (base, body) => {
  const coreTooltipDriver = tooltipDriverFactoryCore(base, body);
  return {
    ...baseUniDriverFactory(base),

    /** returns true if trigger element exists on the DOM */
    exists: coreTooltipDriver.exists,

    /** returns true if tooltip element exists on the DOM */
    tooltipExists: coreTooltipDriver.tooltipExists,

    /** mouse over the target element */
    mouseEnter: async () => {
      switch (base.type) {
        case 'react':
          return coreTooltipDriver.mouseEnter();

        case 'puppeteer':
          return base.hover();
        default:
          return;
      }
    },

    /** mouse leaves the target element */
    mouseLeave: async () => {
      switch (base.type) {
        case 'react':
          return coreTooltipDriver.mouseLeave();

        case 'puppeteer':
          const { element } = await baseUniDriverFactory(base).element();
          await page.evaluate(async element => {
            const event = new MouseEvent('mouseout', {
              bubbles: true,
              view: window,
              cancelable: true,
            });
            await element.dispatchEvent(event);
          }, element);
          await page.waitFor(200);
          return;

        default:
          return;
      }
    },

    /** returns tooltips content value in string */
    getTooltipText: async () => {
      switch (base.type) {
        case 'react':
          return coreTooltipDriver.getTooltipText();

        case 'puppeteer':
          await base.hover();
          const contentHook = await base.attr('data-content-hook');
          const contentSelector = `[data-content-element="${contentHook}"]`;
          const element = await body.$(contentSelector);
          const text = await element.text();
          await tooltipDriverFactory(base, body).mouseLeave();
          return text;

        default:
          return;
      }
    },
    /** Clicks outside the tooltip element in order to dismiss it */
    clickOutside: async () => {
      switch (base.type) {
        case 'react':
          return coreTooltipDriver.clickOutside();

        case 'puppeteer':
          await page.evaluate(() => {
            document
              .querySelector('body')
              .dispatchEvent(new MouseEvent('mousedown'));
            document
              .querySelector('body')
              .dispatchEvent(new MouseEvent('mouseup'));
          });
          return;

        default:
          return;
      }
    },

    /**
     * Checks whether tooltip has a given size
     * @param {boolean} sizeName The tooltip size
     * @return {Promise<boolean>}
     */
    hasSize: async sizeName => (await base.attr(`data-size`)) === sizeName,
  };
};
