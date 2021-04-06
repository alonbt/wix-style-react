import { baseUniDriverFactory } from '../../test/utils/unidriver';

export const headingUniDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),

    /**
     * Gets text content
     * @returns {Promise<string>} innerHTML
     */
    getText: () => base._prop('innerHTML'),
    /**
     * Gets heading appearance
     * @returns {Promise<'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6'>}
     */
    getAppearance: () => base.attr('data-appearance'),

    /**
     * Checks whether heading is light
     * @return {Promise<boolean>}
     */
    isLight: async () => (await base.attr('data-light')) === 'true',
  };
};
