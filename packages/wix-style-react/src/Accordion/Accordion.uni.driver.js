import {
  baseUniDriverFactory,
  findByHookAtIndex,
} from '../../test/utils/unidriver';
import { dataHooks } from './constants';
import { sleep } from 'wix-ui-test-utils/react-helpers';

const ANIMATION_TIME = 350;

const accordionDriverFactory = (base, body) => ({
  ...baseUniDriverFactory(base),

  /**
   * Gets the title by item index
   * @param {number} idx Item index
   * @returns {Promise<string>} Title at item index
   */
  getItemTitleAt: idx =>
    findByHookAtIndex(base, dataHooks.item, idx)
      .$('[data-hook="title"]')
      .text(),

  /**
   * Checks whether an icon exist at item index
   * @param {number} idx Item index
   * @returns {Promise<boolean>}
   */
  isIconExistsAt: idx =>
    findByHookAtIndex(base, dataHooks.item, idx)
      .$('[data-hook="icon"]')
      .exists(),

  /**
   * Checks whether an item is expanded at index
   * @param {number} idx Item index
   * @returns {Promise<boolean>}
   */
  isItemExpandedAt: idx =>
    findByHookAtIndex(base, dataHooks.item, idx)
      .$('[data-hook="children"]')
      .exists(),

  /**
   * Clicks toggle button at item index
   * @param {number} idx Item index
   * @returns {Promise<void>}
   */
  clickToggleButtonAt: async idx => {
    await findByHookAtIndex(base, dataHooks.item, idx)
      .$('[data-hook="toggle-accordion-wrapper"]')
      .click();

    // Wait for animation to finish
    return await sleep(ANIMATION_TIME);
  },

  /**
   * Clicks item at index
   * @param {number} idx Item index
   * @returns {Promise<void, number>}
   */
  clickItemAt: async idx => {
    await findByHookAtIndex(base, dataHooks.item, idx)
      .$('[data-hook="header"]')
      .click();

    // Wait for animation to finish
    return await sleep(ANIMATION_TIME);
  },

  /**
   * Gets toggle button label at item index
   * @param {number} idx Item index
   * @returns {Promise<string>}
   */
  getToggleButtonLabelAt: idx =>
    findByHookAtIndex(base, dataHooks.item, idx)
      .$(
        `[data-hook="toggle-accordion-wrapper"] [data-hook="${dataHooks.toggleButton}"]`,
      )
      .text(),
});

export default accordionDriverFactory;
