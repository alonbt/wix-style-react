const textDriverFactory = ({ element }) => {
  return {
    exists: () => !!element,
    getTagName: () => element.tagName.toLowerCase(),
    getText: () => element.innerHTML,
    getSize: () => element.getAttribute('data-size'),
    getSkin: () => element.getAttribute('data-skin'),
    getWeight: () => element.getAttribute('data-weight'),
    isLight: () => element.getAttribute('data-light') === 'true',
    isSecondary: () => element.getAttribute('data-secondary') === 'true',
  };
};

export default textDriverFactory;
