import { sidePanelDriverFactory as publicDriverFactory } from '../SidePanel.uni.driver';
import { dataHooks } from '../constants';

export const sidePanelPrivateDriverFactory = (base, body) => {
  const headerDriver = base.$(`[data-hook="${dataHooks.sidePanelHeader}"]`);
  const contentDriver = base.$(`[data-hook="${dataHooks.sidePanelContent}"]`);
  const footerDriver = base.$(`[data-hook="${dataHooks.sidePanelFooter}"]`);
  return {
    ...publicDriverFactory(base, body),

    hasClass: className => base.hasClass(className),
    content: {
      exists: async () => contentDriver.exists(),
    },
    footer: {
      exists: async () => footerDriver.exists(),
    },
    header: {
      exists: async () => headerDriver.exists(),
      getCustomNodeText: async () => base.$(`[data-hook="custom-node"]`).text(),
    },
  };
};
