import { baseUniDriverFactory } from '../../test/utils/unidriver';

export const badgeUniDriverFactory = base => ({
  ...baseUniDriverFactory(base),

  /**
   * Gets root element innerHTML
   * @return {Promise<HTMLElement>}
   */
  getContent: () => base._prop('innerHTML'),

  /**
   * Gets badge text
   * @return {Promise<string>}
   */
  text: () => base.text(),

  /**
   * Gets badge type
   * @return {Promise<'solid' | 'outlined' | 'transparent'>}
   */
  getType: () => base.attr('data-type'),

  /**
   * Gets badge type
   * @return {Promise<'general' | 'standard' | 'danger' | 'success' | 'neutral' | 'neutralLight' | 'warning' | 'warningLight' | 'urgent' | 'neutralStandard' | 'neutralSuccess' | 'neutralDanger' | 'premium'>}
   */
  getSkin: () => base.attr('data-skin'),

  /**
   * Gets badge size
   * @return {Promise<'medium' | 'small'>}
   */
  getSize: () => base.attr('data-size'),

  /**
   * Checks whether the text is uppercase
   * @return {Promise<boolean>}
   */
  isUppercase: async () => (await base.attr('data-uppercase')) === 'true',

  /**
   * Checks whether badge is clickable
   * @return {Promise<boolean>}
   */
  hasClickCursor: async () => (await base.attr('data-clickable')) === 'true',
});
