import ReactTestUtils from 'react-dom/test-utils';
import { THEMES, SIZES, DATA_HOOKS, DATA_ATTRIBUTES } from './constnats';

const breadcrumbsDriverFactory = ({ element }) => {
  const optionAt = position => element.childNodes[position];

  return {
    exists: () => !!element,

    /** return the number of the items in the breadcrumbs */
    breadcrumbsLength: () => element.childNodes.length,

    /** return the breadcrumb item content at position  */
    breadcrumbContentAt: position => optionAt(position).textContent,

    /** click on breadcrumb item at position */
    clickBreadcrumbAt: position =>
      ReactTestUtils.Simulate.click(
        optionAt(position).querySelector(
          `[data-hook^="${DATA_HOOKS.BREADCRUMB_CLICKABLE}"]`,
        ),
      ),

    /** return the active breadcrumb item position or return null if no active item exists */
    getActiveItemId: () => {
      const activeItem = element.querySelector(
        `[${DATA_ATTRIBUTES.DATA_ACTIVE}="true"]`,
      );

      if (!activeItem) {
        return null;
      }

      return Array.from(activeItem.parentNode.children).indexOf(activeItem);
    },

    /** fulfilled if breadcrumbs component is large */
    isLarge: () =>
      element.getAttribute(DATA_ATTRIBUTES.DATA_SIZE) === SIZES.large,

    /** fulfilled if breadcrumbs component is medium */
    isMedium: () =>
      element.getAttribute(DATA_ATTRIBUTES.DATA_SIZE) === SIZES.medium,

    /** fulfilled if breadcrumbs component is on white background */
    isOnWhiteBackground: () =>
      element.getAttribute(DATA_ATTRIBUTES.DATA_THEME) ===
      THEMES.onWhiteBackground,

    /** fulfilled if breadcrumbs component is on gray background */
    isOnGrayBackground: () =>
      element.getAttribute(DATA_ATTRIBUTES.DATA_THEME) ===
      THEMES.onGrayBackground,

    /** fulfilled if breadcrumbs component is on dark background */
    isOnDarkBackground: () =>
      element.getAttribute(DATA_ATTRIBUTES.DATA_THEME) ===
      THEMES.onDarkBackground,

    /** returns breadcrumbs component classes */
    getLabelClassList: position =>
      optionAt(position).querySelector(
        `[data-hook="${DATA_HOOKS.BREADCRUMBS_ITEM}"]`,
      ).className,

    /** returns true if the item is a link */
    isActiveLinkAt: index => !!optionAt(index).querySelector('a'),
  };
};

export default breadcrumbsDriverFactory;
