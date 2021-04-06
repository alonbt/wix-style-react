import { baseUniDriverFactory } from '../../test/utils/unidriver';

export const highlighterDriverFactory = (base, body) => {
  return {
    ...baseUniDriverFactory(base, body),

    /**
     * Gets innerHTML
     * @returns {Promise<string>}
     */
    html: async () => {
      // eslint-disable-next-line no-restricted-properties
      return (await base.getNative()).innerHTML;
    },

    /**
     * Gets the driver element
     * @returns {Promise<any>}
     */
    getElement: () => {
      // eslint-disable-next-line no-restricted-properties
      return base.getNative();
    },
  };
};
