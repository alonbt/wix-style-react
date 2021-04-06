import { carouselWIPUniDriverFactory } from '../CarouselWIP.uni.driver';
import ReactTestUtils from 'react-dom/test-utils';
import { iconButtonTestkitFactory } from 'wix-style-react/dist/testkit';
import { DATA_HOOKS } from '../constants';

export const carouselWIPPrivateDriverFactory = base => {
  const arrowButtonDriver = direction =>
    iconButtonTestkitFactory(`[data-hook="${base.$(`${direction}-button`)}"]`);

  return {
    ...carouselWIPUniDriverFactory(base),
    hasClass: className => base.hasClass(className),
    isPrevButtonDisabled: () => arrowButtonDriver('prev').isButtonDisabled(),
    isNextButtonDisabled: () => arrowButtonDriver('next').isButtonDisabled(),
    loadImages: () => {
      base
        .$$(`[data-hook="${DATA_HOOKS.carouselImage}"]`)
        .map(async img => ReactTestUtils.Simulate.load(await img.getNative()));
    },
    clickPageNavigationDot: index => {
      const pageNavigator = base.$(
        `[data-hook="${DATA_HOOKS.pageNavigation(index)}"]`,
      );
      pageNavigator.click();
    },
    isPageNavigationDotExists: () =>
      base.$(`[data-hook^="page-navigation-"]`).exists(),
    getChildText: child => child.text(),
  };
};
