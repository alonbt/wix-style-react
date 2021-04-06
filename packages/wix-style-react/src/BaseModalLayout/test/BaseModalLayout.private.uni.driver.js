import { baseModalLayoutDriverFactory } from '../BaseModalLayout.uni.driver';
import { dataHooks } from '../constants';

export const baseModalLayoutPrivateDriverFactory = base => {
  return {
    ...baseModalLayoutDriverFactory(base),
    // Add here driver methods that considered "private"
    _hasClass: className => base.hasClass(className),
    _closeButtonExists: () =>
      base.$(`[data-hook="${dataHooks.closeButton}"]`).exists(),
    _helpButtonExists: () =>
      base.$(`[data-hook="${dataHooks.helpButton}"]`).exists(),
  };
};
