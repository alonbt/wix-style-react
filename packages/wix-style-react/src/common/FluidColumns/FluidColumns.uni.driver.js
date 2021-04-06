import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { dataHooks } from './constants';

export const fluidColumnsDriverFactory = (base, body) => {
  const getItems = () => base.$$(`[data-hook="${dataHooks.item}"]`);

  return {
    ...baseUniDriverFactory(base, body),

    /** Returns the number of the features that exist in the footer */
    getNumberOfItems: async () => await getItems().count(),
  };
};
