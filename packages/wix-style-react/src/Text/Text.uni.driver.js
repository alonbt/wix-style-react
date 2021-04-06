import { baseUniDriverFactory } from '../../test/utils/unidriver';

export const textUniDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),

    /**
     * Get the root element's tagName
     * @return {Promise<string>} html tagName
     */
    getTagName: async () => (await base._prop('tagName')).toLowerCase(),

    /**
     * Get text content (innerHTML)
     * @return {Promise<string>} innerHTML content
     */
    getText: () => base._prop('innerHTML'),

    /**
     * Get size
     * @return {Promise<'tiny' | 'small' | 'medium'>}
     */
    getSize: () => base.attr('data-size'),

    /**
     * Get skin
     * @return {Promise<'standard'| 'error'| 'success'| 'premium'| 'disabled'>}
     */
    getSkin: () => base.attr('data-skin'),

    /**
     * Get weight
     * @return {Promise<'thin' | 'normal' | 'bold'>}
     */
    getWeight: () => base.attr('data-weight'),

    /**
     * Is light
     * @return {Promise<boolean>}
     */
    isLight: async () => (await base.attr('data-light')) === 'true',
    /**
     * Is secondary
     * @return {Promise<boolean>}
     */
    isSecondary: async () => (await base.attr('data-secondary')) === 'true',
  };
};
