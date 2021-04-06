import inputWithOptionsDriverFactory from '../InputWithOptions/InputWithOptions.driver';

const searchDriverFactory = args => {
  const { element } = args;

  const inputWithOptionsDriver = inputWithOptionsDriverFactory({
    ...args,
    element:
      element && element.querySelector('[data-hook="search-inputwithoptions"]'),
  });

  return {
    ...inputWithOptionsDriver,
    driver: {
      ...inputWithOptionsDriver.driver,
      isExpandable: () => element.hasAttribute('data-expandable'),
      isCollapsed: () => element.hasAttribute('data-collapsed'),
    },
  };
};

export default searchDriverFactory;
