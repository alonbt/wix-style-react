import { baseUniDriverFactory } from '../../test/utils/unidriver';
import { dataHooks } from './constants';

export const floatingNotificationDriverFactory = base => {
  const getByDataHook = dataHook => base.$(`[data-hook="${dataHook}"]`);

  const notificationButton = getByDataHook(dataHooks.button);
  const notificationTextButton = getByDataHook(dataHooks.textButton);
  const notificationCloseButton = getByDataHook(dataHooks.closeButton);
  const notificationText = getByDataHook(dataHooks.notificationText);

  return {
    ...baseUniDriverFactory(base),

    /** Clicks notification button
     * @returns {Promise<void>}
     */
    clickButton: async () => notificationButton.click(),

    /** Get the notification button's text
     * @returns {Promise<string>}
     */
    getButtonLabel: async () => notificationButton.text(),

    /** Clicks the notification text button
     * @returns {Promise<void>}
     */
    clickTextButton: async () => notificationTextButton.click(),

    /** Get the notification text button's text
     * @returns {Promise<string>}
     */
    getTextButtonLabel: async () => notificationTextButton.text(),

    /** Clicks the notification close button
     * @returns {Promise<void>}
     */
    clickCloseButton: async () => notificationCloseButton.click(),

    /** Get the notification text
     * @returns {Promise<string>}
     */
    getText: async () => notificationText.text(),

    /** Checks whether button with passed tag name exists
     * @param {keyof HTMLElementTagNameMap} as Tag name
     * @returns {Promise<boolean>}
     */
    isButtonAs: async as =>
      await base.$(`${as}[data-hook="${dataHooks.button}"]`).exists(),

    /** Get the notification button href attribute's value
     * @returns {Promise<string | null>}
     */
    getButtonHref: async () => notificationButton.attr('href'),

    /** Get the notification button attribute's value by name
     * @param {string} attrName Attribute name
     * @returns {Promise<string | null>}
     */
    getButtonAttr: async attrName => notificationButton.attr(attrName),

    /** Checks whether text button with passed tag name exists
     * @param {keyof HTMLElementTagNameMap} as Tag name
     * @returns {Promise<boolean>}
     */
    isTextButtonAs: async as =>
      await base.$(`${as}[data-hook="${dataHooks.textButton}"]`).exists(),

    /** Get the notification text button href attribute's value
     * @returns {Promise<string | null>}
     */
    getTextButtonHref: async () => notificationTextButton.attr('href'),

    /** Get the notification text button attribute's value by name
     * @param {string} attrName Attribute name
     * @returns {Promise<string | null>}
     */
    getTextButtonAttr: async attrName => notificationTextButton.attr(attrName),
  };
};
