import { baseUniDriverFactory } from '../../test/utils/unidriver';
import { loaderUniDriverFactory } from '../Loader/Loader.uni.driver';
import { selectorUniDriverFactory } from '../Selector/Selector.uni.driver';
import { searchUniDriverFactory } from '../Search/Search.uni.driver';
import { checkboxUniDriverFactory } from '../Checkbox/Checkbox.uni.driver';
import { dataHooks } from './SelectorList.helpers';

export const selectorListUniDriverFactory = (base, body) => {
  const findInListByDataHook = dataHook => base.$(`[data-hook="${dataHook}"]`);
  const mainLoaderDriver = loaderUniDriverFactory(
    base.$(`[data-hook="${dataHooks.mainLoader}"]`),
    body,
  );
  const nextPageLoaderDriver = loaderUniDriverFactory(
    base.$(`[data-hook="${dataHooks.nextPageLoader}"]`),
    body,
  );
  const searchDriver = searchUniDriverFactory(
    base.$(`[data-hook="${dataHooks.search}"]`),
    body,
  );
  const toggleAllCheckboxDriver = checkboxUniDriverFactory(
    base.$(`[data-hook="${dataHooks.toggleAllCheckbox}"]`),
    body,
  );
  const getList = () => findInListByDataHook(dataHooks.list);
  const getListContent = () => findInListByDataHook(dataHooks.content);
  const getSelectors = () =>
    getList().$$(`[data-hook="${dataHooks.selector}"]`);
  const selectorDriverAt = i => selectorUniDriverFactory(getSelectors().get(i));
  const emptyState = () => findInListByDataHook(dataHooks.emptyState);
  const noResultsFoundState = () =>
    findInListByDataHook(dataHooks.noResultsFoundState);

  return {
    ...baseUniDriverFactory(base),

    /**
     * Checks whether the main loader exists.
     * @returns {Promise<boolean>} True if main loader exists; false otherwise.
     */
    mainLoaderExists: () => mainLoaderDriver.exists(),
    /**
     * Checks whether the next page loader exists.
     * @returns {Promise<boolean>} True if next page loader exists; false otherwise.
     */
    nextPageLoaderExists: () => nextPageLoaderDriver.exists(),
    /**
     * Checks whether the search input exists.
     * @returns {Promise<boolean>} True if search input exists; false otherwise.
     */
    searchInputExists: () => searchDriver.exists(),
    /**
     * Focuses search input
     * @returns {Promise<void>} Resolves when search input is focused.
     */
    focusSearchInput: () => searchDriver.inputDriver.focus(),
    /**
     * Changes search input value
     * @param {string} value
     * @returns {Promise<void>} Resolves when search input value changes.
     */
    enterSearchValue: value => searchDriver.inputDriver.enterText(value),
    /**
     * Returns search input value
     * @returns {Promise<string>} Search input string value.
     */
    getSearchValue: () => searchDriver.inputDriver.getValue(),
    /**
     * Clicks on search input's clear button to clear value
     * @returns {Promise<void>} Resolves when clear button was clicked.
     */
    clickSearchInputClear: () => searchDriver.inputDriver.clickClear(),
    /**
     * Checks whether the toggle-all checkbox exists.
     * @param {UniDriver<any>} checkboxContainer a unidriver of the checkbox's container
     * @returns {Promise<boolean>} True if toggle-all checkbox exists; false otherwise.
     */
    toggleAllCheckboxExists: () => toggleAllCheckboxDriver.exists(),
    /**
     * Checks whether the toggle-all checkbox is checked.
     * @param {UniDriver<any>} checkboxContainer a unidriver of the checkbox's container
     * @returns {Promise<boolean>} True if toggle-all checkbox is checked; false otherwise.
     */
    isToggleAllCheckboxChecked: () => toggleAllCheckboxDriver.isChecked(),
    /**
     * Returns toggle-all checkbox label text
     * @param {UniDriver<any>} checkboxContainer a unidriver of the checkbox's container
     * @returns {Promise<string>}
     */
    getToggleAllCheckboxLabel: () => toggleAllCheckboxDriver.getLabel(),
    /**
     * Clicks on toggle-all checkbox to select/deselect all non-disabled items.
     * @param {UniDriver<any>} checkboxContainer a unidriver of the checkbox's container
     * @returns {Promise<void>} Resolves when toggle-all checkbox was clicked.
     */
    clickToggleAllCheckbox: () => toggleAllCheckboxDriver.click(),
    /**
     * Checks whether empty state is shown.
     * @returns {Promise<boolean>} True if empty state is shown; false otherwise.
     */
    showsEmptyState: () => emptyState().exists(),
    /**
     * Gets empty state.
     * @returns {Promise<HTMLElement>}
     */
    getEmptyState: () => emptyState()._prop('firstChild'),
    /**
     * Checks whether no results found state is shown.
     * @returns {Promise<boolean>} True if no results found state is shown; false otherwise.
     */
    showsNoResultsFoundState: () => noResultsFoundState().exists(),
    /**
     * Gets no results found state.
     * @returns {Promise<HTMLElement>}
     */
    getNoResultsFoundState: () => noResultsFoundState()._prop('firstChild'),
    /**
     * Checks whether the list exists.
     * @returns {Promise<boolean>} True if list exists; false otherwise.
     */
    listExists: () => getList().exists(),
    /**
     * Returns the number of items in the list.
     * @returns {Promise<number>}
     */
    numberOfItemsInList: () => getSelectors().count(),
    /**
     * Toggles selector of the item at the passed index.
     * @param {number} i Item index
     * @returns {Promise<void>} Resolves when selector is toggled.
     */
    toggleSelectorAt: i => selectorDriverAt(i).toggle(),
    /**
     * Checks whether the selector of the item at the passed index is checked.
     * @param {number} i Item index
     * @returns {Promise<boolean>}
     */
    isSelectorCheckedAt: i => selectorDriverAt(i).isChecked(),
    /**
     * Checks whether the selector of the item at the passed index is disabled.
     * @param {number} i Item index
     * @returns {Promise<boolean>}
     */
    isSelectorDisabledAt: i => selectorDriverAt(i).isDisabled(),
    /**
     * Triggers "scroll" event on the list.
     * @returns {Promise<boolean>}.
     */
    scrollDown: async () =>
      // eslint-disable-next-line no-restricted-properties
      (await getListContent().getNative()).dispatchEvent(new Event('scroll')),
  };
};
