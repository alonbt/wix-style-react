import { baseUniDriverFactory } from '../../test/utils/unidriver';

export const tabsUniDriverFactory = base => {
  const findFirst = async query => {
    const item = base.$$(query).get(0);
    return (await item.exists()) ? item : null;
  };
  const getItemsContainer = async () => findFirst('ul');
  const getItems = async () => {
    const itemsContainer = await getItemsContainer();
    return itemsContainer.$$('li').map(child => child);
  };

  const getItemsContainerType = async () => {
    const itemContainer = await getItemsContainer();
    return await itemContainer.attr('data-type');
  };

  return {
    ...baseUniDriverFactory(base),

    /**
     * Gets all titles text
     * @return {Promise<string[]>}
     */
    getTitles: async () =>
      Promise.all((await getItems()).map(item => item.text())),

    /**
     * Clicks the tab at index
     * @param {number} index
     * @return {Promise<void>}
     */
    clickTabAt: async index => (await getItems())[index].click(),

    /**
     * Gets active tab index
     * @return {Promise<number>}
     */
    getActiveTabIndex: async () => {
      const itemsDataActivePromises = (await getItems()).map(item =>
        item.attr('data-active'),
      );
      const itemsDataActive = await Promise.all(itemsDataActivePromises);
      return itemsDataActive.findIndex(active => active === 'true');
    },

    /**
     * Checks whether tabs type is default
     * @return {Promise<boolean>}
     */
    isDefaultType: async () => !(await getItemsContainerType()),

    /**
     * Checks whether tabs type is container
     * @return {Promise<boolean>}
     */
    getItemsContainerType,

    /**
     * Gets the data-hook
     * @param {number} index
     * @return {Promise<string>}
     */
    getDataHook: async index => (await getItems())[index].attr('data-hook'),

    /**
     * Gets a set of tabs widths
     * @return {Promise<Set<string>>}
     */
    getItemsWidth: async () => {
      const items = await getItems();
      const itemsWidthArrayPromise = items.map(item =>
        item._prop('style').then(style => style.width),
      );
      const itemsWidthArray = await Promise.all(itemsWidthArrayPromise);
      return new Set(itemsWidthArray);
    },

    /**
     * Checks whether tabs has a divider
     * @return {Promise<boolean>}
     */
    hasDivider: async () => (await base.attr('data-divider')) === 'true',

    /**
     * Gets the side content
     * @return {Promise<UniDriver|null>}
     */
    getSideContent: async () => findFirst(`[data-content="true"]`),

    /**
     * Gets tabs max widths
     * @return {Promise<string[]>}
     */
    getItemsMaxWidths: async () =>
      Promise.all(
        (await getItems()).map(item =>
          item._prop('style').then(style => style),
        ),
      ),
  };
};
