import ReactTestUtils from 'react-dom/test-utils';
import { iconButtonTestkitFactory } from 'wix-style-react/dist/testkit';
import { isClassExists } from '../../../test/utils';
import { CarouselWIPDriver as publicDriver } from '../CarouselWIP.driver';
import { DATA_HOOKS } from '../constants';

export default ({ element }) => {
  const arrowButtonDriver = direction =>
    iconButtonTestkitFactory({
      wrapper: element,
      dataHook: `${direction}-button`,
    });

  return {
    ...publicDriver({ element }),
    hasClass: className => isClassExists(element, className),
    isPrevButtonDisabled: () => arrowButtonDriver('prev').isButtonDisabled(),
    isNextButtonDisabled: () => arrowButtonDriver('next').isButtonDisabled(),
    loadImages: () => {
      element
        .querySelectorAll(`[data-hook="${DATA_HOOKS.carouselImage}"]`)
        .forEach(img => ReactTestUtils.Simulate.load(img));
    },
    clickPageNavigationDot: index => {
      const pageNavigator = element.querySelector(
        `[data-hook="${DATA_HOOKS.pageNavigation(index)}"]`,
      );
      ReactTestUtils.Simulate.click(pageNavigator);
    },
    isPageNavigationDotExists: () =>
      !!element.querySelector(`[data-hook^="page-navigation-"]`),
    getChildText: child => child.textContent,
  };
};
