import {
  baseUniDriverFactory,
  findByHook,
  getDataAttributeValue,
} from '../../test/utils/unidriver';
import { dataHooks, dataAttr } from './constants';
import { getItemAt } from './utils';

export const selectableAccordionDriverFactory = (base, body) => {
  return {
    ...baseUniDriverFactory(base, body),

    /**
     * Clicks the item by item index
     * @param {number} idx Item index
     * @returns {Promise<void>} Title at item index
     */
    clickItemAt: async idx => {
      const item = await getItemAt(base, idx);
      return findByHook(item, dataHooks.itemHeader).click();
    },

    /**
     * Checks whether the item is expanded by item index
     * @param {number} idx Item index
     * @returns {Promise<boolean>} Title at item index
     */
    isItemExpandedAt: async idx => {
      const item = await getItemAt(base, idx);
      const itemState = await getDataAttributeValue(item, dataAttr.STATE);

      return itemState === 'open';
    },

    /**
     * Checks whether the item is disabled by item index
     * @param {number} idx Item index
     * @returns {Promise<boolean>}
     */
    isItemDisabledAt: async idx => {
      const item = await getItemAt(base, idx);
      const itemState = await getDataAttributeValue(item, dataAttr.DISABLED);

      return itemState === 'true';
    },
  };
};
