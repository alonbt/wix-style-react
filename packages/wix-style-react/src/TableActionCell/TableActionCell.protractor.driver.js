import { dataHooks } from './constants';

const tableActionCellDriverFactory = component => {
  const getByHook = dataHook => component.$(`[data-hook="${dataHook}"]`);

  return {
    element: () => component,
    /** Get the primary action placeholder element */
    getPrimaryActionPlaceholder: () => getByHook(dataHooks.placeholder),
    /** Get the primary action button element */
    getPrimaryActionButton: () => getByHook(dataHooks.primaryAction),
    /** Get the visible secondary actions wrapper element */
    getVisibleActionsWrapper: () => getByHook(dataHooks.visibleActionsWrapper),
    /** Get the secondary actions popover menu element */
    getHiddenActionsPopoverMenu: () => getByHook(dataHooks.popoverMenu),
  };
};

export default tableActionCellDriverFactory;
