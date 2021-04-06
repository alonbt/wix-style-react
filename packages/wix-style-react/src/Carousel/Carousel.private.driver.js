import ReactTestUtils from 'react-dom/test-utils';
import { iconButtonTestkitFactory } from 'wix-style-react/dist/testkit';
import { isClassExists } from '../../test/utils';

import { carouselDriverFactory as publicDriver } from './Carousel.driver';

export default ({ element }) => {
  const arrowButtonDriver = direction =>
    iconButtonTestkitFactory({
      wrapper: element,
      dataHook: `${direction}-button`,
    });

  return {
    ...publicDriver({ element }),
    hasClass: className => isClassExists(element, className),
    getCurrentImageIndex: () => {
      const currentSlide = element.querySelector('[aria-hidden="false"]');
      return Number(currentSlide.dataset.index);
    },
    isPrevButtonDisabled: () => arrowButtonDriver('prev').isButtonDisabled(),
    isNextButtonDisabled: () => arrowButtonDriver('next').isButtonDisabled(),
    loadImages: () => {
      element
        .querySelectorAll('[data-hook="carousel-img"]')
        .forEach(img => ReactTestUtils.Simulate.load(img));
    },
    mouseOver: () => {
      const imageContainer = element.querySelector('.slick-current');
      ReactTestUtils.Simulate.mouseOver(imageContainer);
    },
    mouseOut: () => {
      const imageContainer = element.querySelector('.slick-current');
      ReactTestUtils.Simulate.mouseOut(imageContainer);
    },
    clickPageNavigationDot: index => {
      const pageNavigator = element.querySelector(
        `[data-hook="page-navigation-${index}"]`,
      );
      ReactTestUtils.Simulate.click(pageNavigator);
    },
    isPageNavigationDotExists: () =>
      !!element.querySelector(`[data-hook^="page-navigation-"]`),
    getChildText: child => child.textContent,
  };
};
