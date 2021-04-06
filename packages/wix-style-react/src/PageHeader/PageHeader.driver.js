import ReactTestUtils from 'react-dom/test-utils';
import { isClassExists } from '../../test/utils';
import { dataHooks } from './constants';

const titleElement = element =>
  element.querySelector(`[data-hook="${dataHooks.title}"]`);
const subtitleElement = element =>
  element.querySelector(`[data-hook="${dataHooks.subtitle}"] span`);
const breadcrumbsElement = element =>
  element.querySelector(`[data-hook="${dataHooks.breadcrumbs}"]`);
const actionBarElement = element =>
  element.querySelector(`[data-hook="${dataHooks.actionBar}"]`);
const backButtonElement = element =>
  element.querySelector(`[data-hook="${dataHooks.backButton}"]`);

export default ({ element }) => ({
  hasClass: className => isClassExists(element, className),
  titleText: () => titleElement(element).textContent,
  isTitleExists: () => !!titleElement(element),
  subtitleText: () => subtitleElement(element).textContent,
  isSubtitleExists: () => !!subtitleElement(element),
  isBreadcrumbsExists: () => !!breadcrumbsElement(element),
  breadcrumbsText: () => breadcrumbsElement(element).textContent,
  isActionBarExists: () => !!actionBarElement(element),
  isBackButtonExists: () => !!backButtonElement(element),
  clickBackButton: () =>
    ReactTestUtils.Simulate.click(backButtonElement(element)),
});
