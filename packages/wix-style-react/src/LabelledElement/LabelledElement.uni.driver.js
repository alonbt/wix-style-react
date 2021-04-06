import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import DataHooks from './dataHooks';

export const labelledElementDriverFactory = base => {
  const getLabel = () => base.$(`[data-hook="${DataHooks.label}"]`);

  return {
    ...baseUniDriverFactory(base),

    /** Gets the content of rendered label */
    getLabelText: () => getLabel().text(),

    /** Checks if position the label is positioned at thetop of the input element  */
    isLabelAtTop: async () => (await getLabel().attr('data-top')) === 'true',

    /** Gets the children container UniDriver */
    getChildren: () => base.$(`[data-hook="${DataHooks.childrenWrapper}"]`),
  };
};
