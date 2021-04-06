import { baseUniDriverFactory, findByHook } from '../../test/utils/unidriver';
import { iconButtonDriverFactory } from '../IconButton/IconButton.uni.driver';
import { dataHooks } from './constants';

export const pageHeaderUniDriverFactory = base => {
  const titleElement = () => findByHook(base, dataHooks.title);
  const subtitleElement = () => findByHook(base, dataHooks.subtitle);
  const breadcrumbsElement = () => findByHook(base, dataHooks.breadcrumbs);
  const actionBarElement = () => findByHook(base, dataHooks.actionBar);
  const backButtonElement = () => findByHook(base, dataHooks.backButton);

  return {
    ...baseUniDriverFactory(base),
    /**
     * Checks whether the PageHeader class exists
     * @param {name} className
     * @returns {Promise<boolean>}
     */
    hasClass: className => base.hasClass(className),
    /**
     * Gets PageHeader title text
     * @return {Promise<string>}
     */
    titleText: () => titleElement().text(),
    /**
     * Checks whether the PageHeader title exists
     * @returns {Promise<boolean>}
     */
    isTitleExists: () => titleElement().exists(),
    /**
     * Gets PageHeader subtitle text
     * @return {Promise<string>}
     */
    subtitleText: () => subtitleElement().text(),
    /**
     * Checks whether the PageHeader subtitle exists
     * @returns {Promise<boolean>}
     */
    isSubtitleExists: () => subtitleElement().exists(),
    /**
     * Checks whether the PageHeader breadcrumbs exists
     * @returns {Promise<boolean>}
     */
    isBreadcrumbsExists: () => breadcrumbsElement().exists(),
    /**
     * Gets PageHeader breadcrumbs text
     * @return {Promise<string>}
     */
    breadcrumbsText: () => breadcrumbsElement().text(),
    /**
     * Checks whether the PageHeader action bar exists
     * @returns {Promise<boolean>}
     */
    isActionBarExists: () => actionBarElement().exists(),
    /**
     * Checks whether the PageHeader back button exists
     * @returns {Promise<boolean>}
     */
    isBackButtonExists: () => backButtonElement().exists(),
    /**
     * Clicks PageHeader back button
     * @returns {Promise<void>}
     */
    clickBackButton: () => iconButtonDriverFactory(backButtonElement()).click(),
  };
};
