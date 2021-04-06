import { isClassExists } from '../../test/utils';

export default ({ element }) => ({
  /** fulfilled if element in the DOM */
  exists: () => !!element,
  hasClass: className => isClassExists(element, className),

  /** true if header background image exist */
  backgroundImageExists: () =>
    !!element.querySelector('[data-hook="page-background-image"]'),

  /** true if gradient class name exist */
  gradientClassNameExists: () =>
    !!element.querySelector('[data-hook="page-gradient-class-name"]'),

  /** true if title exist in DOM */
  tailExists: () => !!element.querySelector('[data-hook="page-tail"]'),

  /** return container height */
  gradientContainerHeight: () =>
    element.querySelector('[data-hook="page-gradient-class-name"]').style
      .height,

  /** returns html in a string form */
  getPageHtml: () => element.innerHTML,
});
