import ReactTestUtils from 'react-dom/test-utils';

const tabsDriverFactory = ({ element }) => {
  const findFirst = query => element.querySelector(query);
  const getItemsContainer = () => findFirst('ul');
  const getItems = () => [...getItemsContainer().childNodes];
  const getItemsContainerType = () =>
    getItemsContainer().getAttribute('data-type');

  return {
    exists: () => !!element,
    getTitles: () => getItems().map(item => item.textContent),
    clickTabAt: index => ReactTestUtils.Simulate.click(getItems()[index]),
    getActiveTabIndex: () =>
      getItems().findIndex(item => item.getAttribute('data-active') === 'true'),
    isDefaultType: () => !getItemsContainerType(),
    getItemsContainerType,
    getDataHook: index => getItems()[index].getAttribute('data-hook'),
    getItemsWidth: () => new Set(getItems().map(item => item.style.width)),
    hasDivider: () => element.getAttribute('data-divider') === 'true',
    getSideContent: () => findFirst(`[data-content="true"]`),
    getItemsMaxWidths: () => getItems().map(item => item.style.maxWidth),
  };
};

export default tabsDriverFactory;
