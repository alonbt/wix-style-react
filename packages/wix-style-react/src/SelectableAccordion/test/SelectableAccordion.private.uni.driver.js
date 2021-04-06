import { selectableAccordionDriverFactory as publicDriverFactory } from '../SelectableAccordion.uni.driver';
import { dataHooks } from '../constants';
import { getItemAt } from '../utils';
import { findByHook, countByHook } from '../../../test/utils/unidriver';

export const selectableAccordionPrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),

    getItemsCount: () => countByHook(base, dataHooks.item),

    hoverOnItem: async idx => {
      const item = await getItemAt(base, idx);

      return findByHook(item, dataHooks.itemHeader).hover();
    },
  };
};
