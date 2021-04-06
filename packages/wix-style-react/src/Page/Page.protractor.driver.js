const scrollTopTreshold = 20;
const titleElement = component =>
  component.$(`[data-hook="page-header-title"]`);
const scrollableContentElement = component =>
  component.$('[data-hook="page-scrollable-content"]');

const pageDriverFactory = component => {
  const setContentScrollOffset = async offset => {
    const element = scrollableContentElement(component);
    await browser.executeScript(
      `arguments[0].scrollTop = ${offset};`,
      await element.getWebElement(),
    );
  };

  return {
    /** returns the driver element */
    element: () => component,
    /** Scroll content down, enough to minimize page header */
    scrollDown: () => setContentScrollOffset(scrollTopTreshold + 1),

    /** scrolls up to maximised page */
    scrollUp: () => setContentScrollOffset(scrollTopTreshold),

    /** true if title exists */
    titleExists: () => titleElement(component).isPresent(),

    /** returns title element */
    titleElement: () => titleElement(component),
  };
};

export default pageDriverFactory;
