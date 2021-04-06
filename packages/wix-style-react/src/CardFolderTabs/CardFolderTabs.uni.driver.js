import { baseUniDriverFactory, findByHook } from '../../test/utils/unidriver';
import { dataHooks } from './constants';

export const cardFolderTabsDriverFactory = base => {
  const getButtonById = id => findByHook(base, dataHooks.tabButton(id));

  return {
    ...baseUniDriverFactory(base),

    /**
     * Checks whether tab is disabled by id
     * @param {string} tabId
     * @return {Promise<boolean>}
     */
    isTabDisabledById: async tabId =>
      (await getButtonById(tabId).attr('disabled')) !== null,

    /**
     * Selects tab by tab by id
     * @param {string} tabId
     * @return {Promise<void>}
     */
    selectTabById: async tabId => (await getButtonById(tabId)).click(),
  };
};
