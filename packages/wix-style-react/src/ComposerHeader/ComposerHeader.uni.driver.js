import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { dataHooks } from './constants';

export default base => {
  const byHook = dataHook => base.$(`[data-hook="${dataHook}"]`);
  return {
    ...baseUniDriverFactory(base),
    /** returns true if save status hsa been passed. Custom dataHook can be used */
    saveStatusExists: async dataHook =>
      byHook(dataHook || dataHooks.saveStatus).exists(),
    getSaveStatusValue: async dataHook =>
      byHook(dataHook || dataHooks.saveStatus).text(),
    /** returns true if action exists. Requires dataHook. */
    actionsExists: async dataHook => byHook(dataHook).exists(),
    /** return true if main action exists */
    mainActionsExists: async dataHook =>
      byHook(dataHook || dataHooks.mainAction).exists(),
    /** return true if backButton exists. */
    backButtonExists: async () => byHook(dataHooks.backButton).exists(),
    /** returns back button value in string */
    getBackButtonText: async () => byHook(dataHooks.backButton).text(),
    /** clicks on back button */
    clickBack: async () => byHook(dataHooks.backButton).click(),
  };
};
