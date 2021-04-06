const headingDriverFactory = factoryParams => {
  const { element } = factoryParams;

  return {
    exists: () => !!element,
    getText: () => element.innerHTML,
    getAppearance: () => element.getAttribute('data-appearance'),
    isLight: () => element.getAttribute('data-light') === 'true',
  };
};

export default headingDriverFactory;
