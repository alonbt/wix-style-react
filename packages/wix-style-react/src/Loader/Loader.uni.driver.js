import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { tooltipDriverFactory } from '../Tooltip/Tooltip.uni.driver';

const getTextElement = element => element.$(`[data-hook="loader-text"]`);

export const loaderUniDriverFactory = (base, body) => {
  const tooltipSelector = '[data-hook="loader-tooltip"]';
  const tooltipTestkit = () =>
    tooltipDriverFactory(base.$(tooltipSelector), body);
  return {
    ...baseUniDriverFactory(base),
    /** @deprecated Should be private */
    component: () => base.getNative(), // eslint-disable-line no-restricted-properties

    /** returns the loader color ('blue' or 'white') */
    getColor: () => base.attr('data-color'),

    /** returns the element text */
    getText: () => getTextElement(base).text(),

    /** true if the element has text */
    hasText: () => getTextElement(base).exists(),

    /** true when using the large loader */
    isLarge: async () => (await base.attr('data-size')) === 'large',

    /** true when using the medium loader */
    isMedium: async () => (await base.attr('data-size')) === 'medium',

    /** true when using the small loader */
    isSmall: async () => (await base.attr('data-size')) === 'small',

    /** true when using the tiny loader */
    isTiny: async () => (await base.attr('data-size')) === 'tiny',

    /** true when loader is in loading status */
    isLoading: async () => (await base.attr('data-status')) === 'loading',

    /** true when loader is in error status */
    isError: async () => (await base.attr('data-status')) === 'error',

    /** true when loader is in success status */
    isSuccess: async () => (await base.attr('data-status')) === 'success',

    /** trigger the tooltip and returns the value of the tooltip message (async function) */
    getStatusMessage: async () => {
      const tooltipDriver = tooltipTestkit();
      await tooltipDriver.mouseEnter();
      return tooltipDriver.getTooltipText();
    },
  };
};
