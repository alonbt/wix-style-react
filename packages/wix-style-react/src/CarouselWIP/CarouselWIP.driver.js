import ReactTestUtils from 'react-dom/test-utils';
import { DATA_HOOKS } from './constants';

export const carouselWIPDriverFactory = ({ element }) => {
  return {
    exists: () => !!element,
    isLoading: () => {
      const loader = element.querySelector(
        `[data-hook="${DATA_HOOKS.loader}"]`,
      );
      return !!loader;
    },
    getChildren: () =>
      element.querySelectorAll(`[data-hook="${DATA_HOOKS.child}"]`),
    getImages: () => {
      return [
        ...element.querySelectorAll(
          `[data-hook="${DATA_HOOKS.carouselImage}"]`,
        ),
      ].map(img => img.src);
    },
    clickPrevious: () => {
      const prevButton = element.querySelector(
        `[data-hook="${DATA_HOOKS.prevButton}"]`,
      );
      ReactTestUtils.Simulate.click(prevButton);
    },
    clickNext: () => {
      const nextButton = element.querySelector(
        `[data-hook="${DATA_HOOKS.nextButton}"]`,
      );
      ReactTestUtils.Simulate.click(nextButton);
    },
  };
};
