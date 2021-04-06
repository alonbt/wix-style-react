import { baseUniDriverFactory, findByHook } from '../../test/utils/unidriver';
import { dataHooks } from './constants';

export const pageSectionDriverFactory = (base, body) => {
  const titleElement = () => findByHook(base, dataHooks.pageSectionTitle);
  const subtitleElement = () => findByHook(base, dataHooks.pageSectionSubtitle);
  const actionsBarElement = () =>
    findByHook(base, dataHooks.pageSectionActionsBar);

  return {
    ...baseUniDriverFactory(base, body),
    /**
     * Gets PageSection title text
     * @return {Promise<string>}
     */
    getTitleText: () => titleElement().text(),
    /**
     * Checks whether the PageSection title exists
     * @returns {Promise<boolean>}
     */
    isTitleExists: () => titleElement().exists(),
    /**
     * Gets PageSection subtitle text
     * @return {Promise<string>}
     */
    getSubtitleText: () => subtitleElement().text(),
    /**
     * Checks whether the PageSection subtitle exists
     * @returns {Promise<boolean>}
     */
    isSubtitleExists: () => subtitleElement().exists(),
    /**
     * Checks whether the PageHeader action bar exists
     * @returns {Promise<boolean>}
     */
    isActionsBarExists: () => actionsBarElement().exists(),
  };
};
