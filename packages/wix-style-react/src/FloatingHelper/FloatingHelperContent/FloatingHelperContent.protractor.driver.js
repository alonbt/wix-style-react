import { dataHooks } from './constants';

export const floatingHelperContentDriverFactory = element => {
  const getElementByDataHook = dataHook =>
    element.$(`[data-hook='${dataHook}']`);

  const actionButton = () => getElementByDataHook(dataHooks.actionButton);

  return {
    element: () => element,
    hasActionButton: async () => actionButton().isPresent(),
  };
};
