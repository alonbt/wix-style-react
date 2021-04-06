import { baseUniDriverFactory, findByHook } from '../../test/utils/unidriver';
import { dataHooks } from './constants';

export const socialButtonDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),

    /**
     * Gets buttons text value
     * @returns {Promise<String>}
     */
    getText: async () => findByHook(base, dataHooks.socialTitle).text(),
  };
};
