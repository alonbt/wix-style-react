import ReactTestUtils from 'react-dom/test-utils';
import { testkitFactoryCreator } from 'wix-ui-test-utils/vanilla';
import loaderDriverFactory from '../Loader/Loader.driver';
import selectorDriverFactory from '../Selector/Selector.driver';
import searchDriverFactory from '../Search/Search.driver';
import textDriverFactory from '../Text/Text.driver';
import { dataHooks } from '../SelectorList/SelectorList.helpers';
import checkboxDriverFactory from '../Checkbox/Checkbox.driver';
import buttonDriverFactory from '../Button/Button.legacy.driver';

const textTestkitFactory = testkitFactoryCreator(textDriverFactory);
const loaderTestkitFactory = testkitFactoryCreator(loaderDriverFactory);
const buttonTestkitFactory = testkitFactoryCreator(buttonDriverFactory);
const searchTestkitFactory = testkitFactoryCreator(searchDriverFactory);
const checkboxTestkitFactory = testkitFactoryCreator(checkboxDriverFactory);

const modalSelectorLayoutDriverFactory = ({ element }) => {
  const findInModalByDataHook = dataHook =>
    element.querySelector(`[data-hook="${dataHook}"]`);
  const mainLoaderDriver = () =>
    loaderTestkitFactory({
      wrapper: element,
      dataHook: dataHooks.mainLoader,
    });
  const nextPageLoaderDriver = () =>
    loaderTestkitFactory({
      wrapper: element,
      dataHook: dataHooks.nextPageLoader,
    });
  const cancelButtonDriver = () =>
    buttonTestkitFactory({
      wrapper: element,
      dataHook: 'cancellation-button',
    });
  const okButtonDriver = () =>
    buttonTestkitFactory({
      wrapper: element,
      dataHook: 'confirmation-button',
    });
  const subtitleTextDriver = () =>
    textTestkitFactory({
      wrapper: element,
      dataHook: dataHooks.subtitle,
    });
  const searchDriver = () =>
    searchTestkitFactory({
      wrapper: element,
      dataHook: dataHooks.search,
    });
  const getList = () => findInModalByDataHook(dataHooks.list);
  const getSelectorListContent = () => findInModalByDataHook(dataHooks.content);
  const getSelectors = () =>
    getList().querySelectorAll(`[data-hook="${dataHooks.selector}"]`);
  const selectorDriverAt = i =>
    selectorDriverFactory({ element: getSelectors()[i] });
  const emptyState = () => findInModalByDataHook(dataHooks.emptyState);
  const noResultsFoundState = () =>
    findInModalByDataHook(dataHooks.noResultsFoundState);
  const footerSelector = checkboxTestkitFactory({
    wrapper: element,
    dataHook: dataHooks.toggleAllCheckbox,
  });

  return {
    exists: () => !!element,
    mainLoaderDriver,
    nextPageLoaderDriver,
    cancelButtonDriver,
    okButtonDriver,
    searchDriver,
    subtitleTextDriver,
    getTitle: () => findInModalByDataHook('header-layout-title').textContent,
    clickOnClose: () =>
      ReactTestUtils.Simulate.click(
        findInModalByDataHook('header-close-button'),
      ),
    showsEmptyState: () => !!emptyState(),
    getEmptyState: () => emptyState().childNodes[0],
    showsNoResultsFoundState: () => !!noResultsFoundState(),
    getNoResultsFoundState: () => noResultsFoundState().childNodes[0],
    listExists: () => !!getList(),
    numberOfItemsInList: () => getSelectors().length,
    getSelectorDriverAt: i => selectorDriverAt(i),
    scrollDown: () =>
      getSelectorListContent().dispatchEvent(new Event('scroll')),
    footerSelector: () => footerSelector,
  };
};

export default modalSelectorLayoutDriverFactory;
