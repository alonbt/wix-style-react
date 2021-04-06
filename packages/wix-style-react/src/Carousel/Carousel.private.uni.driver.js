import { ReactBase } from '../../test/utils/unidriver';
import { carouselUniDriverFactory } from './Carousel.uni.driver';
import ReactTestUtils from 'react-dom/test-utils';
import { iconButtonTestkitFactory } from 'wix-style-react/dist/testkit';

export const carouselPrivateUniDriverFactory = base => {
  const getCurrentSlide = () => base.$('[aria-hidden="false"]');

  const arrowButtonDriver = direction =>
    iconButtonTestkitFactory(`[data-hook="${base.$(`${direction}-button`)}"]`);

  return {
    ...carouselUniDriverFactory(base),
    hasClass: className => base.hasClass(className),
    getCurrentImageIndex: async () =>
      Number(await getCurrentSlide().attr('data-index')),
    isPrevButtonDisabled: () => arrowButtonDriver('prev').isButtonDisabled(),
    isNextButtonDisabled: () => arrowButtonDriver('next').isButtonDisabled(),
    loadImages: () => {
      base
        .$$('[data-hook="carousel-img"]')
        .map(async img => ReactTestUtils.Simulate.load(await img.getNative()));
    },
    mouseOver: () => ReactBase(getCurrentSlide())._private.mouseOver(),
    mouseOut: () => ReactBase(getCurrentSlide())._private.mouseOut(),
    clickPageNavigationDot: index => {
      const pageNavigator = base.$(`[data-hook="page-navigation-${index}"]`);
      pageNavigator.click();
    },
    isPageNavigationDotExists: () =>
      base.$(`[data-hook^="page-navigation-"]`).exists(),
    getChildText: child => child.text(),
  };
};
