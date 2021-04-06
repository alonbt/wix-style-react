import { baseUniDriverFactory } from '../../test/utils/unidriver';
import { selectorListUniDriverFactory } from '../SelectorList/SelectorList.uni.driver';
import { loaderUniDriverFactory } from '../Loader/Loader.uni.driver';
import { selectorUniDriverFactory } from '../Selector/Selector.uni.driver';
import { searchUniDriverFactory } from '../Search/Search.uni.driver';
import { textUniDriverFactory } from '../Text/Text.uni.driver';
import { dataHooks } from '../SelectorList/SelectorList.helpers';
import { dataHooks as modalSelectorDataHooks } from './ModalSelectorLayout.helpers';
import { checkboxUniDriverFactory } from '../Checkbox/Checkbox.uni.driver';
import { buttonDriverFactory } from '../Button/Button.uni.driver';

export const modalSelectorLayoutUniDriverFactory = (base, body) => {
  const findInModalByDataHook = dataHook => base.$(`[data-hook="${dataHook}"]`);
  const selectorListDriver = () =>
    selectorListUniDriverFactory(
      base.$(`[data-hook="${modalSelectorDataHooks.selectorList}"]`),
      body,
    );
  const mainLoaderDriver = () =>
    loaderUniDriverFactory(
      base.$(`[data-hook="${dataHooks.mainLoader}"]`),
      body,
    );
  const nextPageLoaderDriver = () =>
    loaderUniDriverFactory(
      base.$(`[data-hook="${dataHooks.nextPageLoader}"]`),
      body,
    );
  const cancelButtonDriver = () =>
    buttonDriverFactory(base.$('[data-hook="cancellation-button"]'), body);
  const okButtonDriver = () =>
    buttonDriverFactory(base.$('[data-hook="confirmation-button"]'), body);
  const subtitleTextDriver = () =>
    textUniDriverFactory(base.$(`[data-hook="${dataHooks.subtitle}"]`), body);
  const searchDriver = () =>
    searchUniDriverFactory(base.$(`[data-hook="${dataHooks.search}"]`), body);
  const getList = () => findInModalByDataHook(dataHooks.list);
  const getSelectorListContent = () => findInModalByDataHook(dataHooks.content);
  const getSelectors = () =>
    getList().$$(`[data-hook="${dataHooks.selector}"]`);
  const selectorDriverAt = i => selectorUniDriverFactory(getSelectors().get(i));
  const footerSelector = checkboxUniDriverFactory(
    base.$(`[data-hook="${dataHooks.toggleAllCheckbox}"]`, body),
  );

  return {
    ...baseUniDriverFactory(base),

    /**
     * Gets main loader driver.
     * @returns {LoaderUniDriver}
     */
    mainLoaderDriver,
    /**
     * Gets next page loader driver.
     * @returns {LoaderUniDriver}
     */
    nextPageLoaderDriver,
    /**
     * Gets cancel button driver.
     * @returns {ButtonUniDriver}
     */
    cancelButtonDriver,
    /**
     * Gets ok button driver.
     * @returns {ButtonUniDriver}
     */
    okButtonDriver,
    /**
     * Gets search driver.
     * @returns {SearchUniDriver}
     */
    searchDriver,
    /**
     * Gets subtitle text driver.
     * @returns {TextUniDriver}
     */
    subtitleTextDriver,
    /**
     * Gets title text.
     * @returns {Promise<string>}
     */
    getTitle: () => findInModalByDataHook('header-layout-title').text(),
    /**
     * Clicks "x" button.
     * @returns {Promise<void>}
     */
    clickOnClose: () => base.$('[data-hook="header-close-button"]').click(),
    /**
     * Checks weather empty state is shown.
     * @returns {Promise<boolean>} True if empty state is shown; false otherwise.
     */
    showsEmptyState: () => selectorListDriver().showsEmptyState(),
    /**
     * Gets empty state.
     * @returns {Promise<HTMLElement>}
     */
    getEmptyState: () => selectorListDriver().getEmptyState(),
    /**
     * Checks weather no results found state is shown.
     * @returns {Promise<boolean>} True if no results found state is shown; false otherwise.
     */
    showsNoResultsFoundState: () =>
      selectorListDriver().showsNoResultsFoundState(),
    /**
     * Gets no results found state.
     * @returns {Promise<HTMLElement>}
     */
    getNoResultsFoundState: () => selectorListDriver().getNoResultsFoundState(),
    /**
     * Checks weather the list exists.
     * @returns {Promise<boolean>} True if list exists; false otherwise.
     */
    listExists: () => selectorListDriver().listExists(),
    /**
     * Returns the number of items in the list.
     * @returns {Promise<number>}
     */
    numberOfItemsInList: () => selectorListDriver().numberOfItemsInList(),
    /**
     * Gets the selector driver of the item at the passed index.
     * @param {number} i Item index
     * @returns {SelectorUniDriver} The selector driver.
     */
    getSelectorDriverAt: i => selectorDriverAt(i),
    /**
     * Triggers "scroll" event on the list.
     * @returns {Promise<boolean>}.
     */
    scrollDown: async () =>
      // eslint-disable-next-line no-restricted-properties
      (await getSelectorListContent().getNative()).dispatchEvent(
        new Event('scroll'),
      ),
    /**
     * Gets footer selector's driver.
     * @returns {CheckboxUniDriver}
     */
    footerSelector: () => footerSelector,
  };
};
