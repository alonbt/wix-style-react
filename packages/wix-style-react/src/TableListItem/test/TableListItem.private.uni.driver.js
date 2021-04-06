import { tableListItemDriverFactory as publicDriverFactory } from '../TableListItem.uni.driver';
import { dataHooks } from '../constants';

export const tableListItemPrivateDriverFactory = (base, body) => {
  const getOptionsContainer = () =>
    base.$(`[data-hook="${dataHooks.tableListItemOptionsContainer}"]`);

  return {
    ...publicDriverFactory(base, body),

    getStyle: () => getOptionsContainer().attr('style'),
    clickCheckboxContainer: () =>
      base
        .$(`[data-hook="${dataHooks.tableListItemCheckboxContainer}"]`)
        .click(),
    isDragHandleExists: () =>
      base.$(`[data-hook="${dataHooks.tableListItemDragHandle}"]`).exists(),
  };
};
