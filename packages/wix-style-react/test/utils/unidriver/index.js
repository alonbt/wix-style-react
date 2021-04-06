export * from './ReactBase';
import { ReactBase } from './ReactBase';
import { baseUniDriverFactory as createBaseUniDriver } from 'wix-ui-test-utils/base-driver';

/**
 * Find element by `data-hook` (exact match)
 * @param {UniDriver} base
 * @param {string} hook
 */
export const findByHook = (base, hook) => base.$(`[data-hook="${hook}"]`);

/**
 * Find element by `data-hook` at index (exact match)
 * @param {UniDriver} base
 * @param {string} hook
 * @param index index
 */
export const findByHookAtIndex = (base, hook, index) =>
  base.$$(`[data-hook="${hook}"]`).get(index);

/**
 * Counts elements by `data-hook` (exact match)
 * @param {UniDriver} base
 * @param {string} hook
 */
export const countByHook = (base, hook) =>
  base.$$(`[data-hook="${hook}"]`).count();

/**
 * Wrapper function which returns null if base doesn't exist.
 * @param {UniDriver} base
 */
export const getElement = async base => ((await base.exists()) ? base : null);

/**
 * Gets data attribute value
 * @param {UniDriver} base
 * @param {string} attr
 */
export const getDataAttributeValue = async (base, attr) => base.attr(attr);

/** Checks if given element is focused
 * @param {UniDriver} element
 * @returns {Promise<boolean>}
 */
export const isElementFocused = async element => {
  const nativeElement = await element.getNative();
  switch (element.type) {
    case 'react':
      return ReactBase(element).isFocus();
    case 'puppeteer':
      return page.evaluate(el => document.activeElement === el, nativeElement);
    case 'protractor':
      const activeElement = await browser.driver.switchTo().activeElement();
      return nativeElement.equals(activeElement);
    default:
      return;
  }
};

export const baseUniDriverFactory = base => {
  const baseUniDriver = createBaseUniDriver(base);
  return {
    /**
     * Checks whether the component found with the given data hook
     * @returns {Promise<boolean>}
     */
    exists: baseUniDriver.exists,

    /**
     * Gets the component root element
     * @returns {Promise<any>}
     */
    element: baseUniDriver.element,

    /**
     * Clicks on the component root element
     * @returns {Promise<void>}
     */
    click: baseUniDriver.click,
  };
};
