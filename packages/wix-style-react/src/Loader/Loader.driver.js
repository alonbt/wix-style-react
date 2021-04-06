import { isClassExists } from '../../test/utils';
import { tooltipTestkitFactory } from 'wix-ui-core/dist/src/testkit';

const getTextElement = element =>
  element.querySelector(`[data-hook="loader-text"]`);

const loaderDriverFactory = ({ element }) => {
  const tooltipTestkit = tooltipTestkitFactory({
    wrapper: element,
    dataHook: `loader-tooltip`,
  });

  return {
    component: () => element,
    exists: () => !!element,

    /** returns the loader color ('blue' or 'white') */
    getColor: () => element.getAttribute('data-color'),

    /** returns the element text */
    getText: () => getTextElement(element).textContent,

    /** true if the element has text */
    hasText: () => !!getTextElement(element),

    /** true when using the large loader */
    isLarge: () => element.getAttribute('data-size') === 'large',

    /** true when using the medium loader */
    isMedium: () => element.getAttribute('data-size') === 'medium',

    /** true when using the small loader */
    isSmall: () => element.getAttribute('data-size') === 'small',

    /** true when using the tiny loader */
    isTiny: () => element.getAttribute('data-size') === 'tiny',

    /** true when loader is in loading status */
    isLoading: () => element.getAttribute('data-status') === 'loading',

    /** true when loader is in error status */
    isError: () => element.getAttribute('data-status') === 'error',

    /** true when loader is in success status */
    isSuccess: () => element.getAttribute('data-status') === 'success',

    /** trigger the tooltip and returns the value of the tooltip message (async function) */
    getStatusMessage: () => {
      tooltipTestkit.mouseEnter();
      return tooltipTestkit.getContentElement().textContent;
    },
  };
};

export default loaderDriverFactory;
