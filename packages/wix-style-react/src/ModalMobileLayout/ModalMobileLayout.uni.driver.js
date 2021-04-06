import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

export const modalMobileLayoutDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),

    /**
     * Gets the title node
     * @return {Promise<UniDriver>} Title testkit
     */
    getTitle: async () => base.$('[data-hook="modalMobileLayout-title"]'),

    /**
     * Gets the content node
     * @return {Promise<UniDriver>} Content testkit
     */
    getContent: async () => base.$('[data-hook="modalMobileLayout-content"]'),

    /**
     * Gets the footer node
     * @return {Promise<UniDriver>} Footer testkit
     */
    getFooter: async () => base.$('[data-hook="modalMobileLayout-footer"]'),

    /**
     * Clicks on the overlay
     * @return {Promise<void>}
     */
    clickOverlay: async () => base.click(),

    /**
     * Clicks on the close button
     * @return {Promise<void>}
     */
    clickCloseButton: async () =>
      base.$('[data-hook="modalMobileLayout-close-button"]').click(),

    /**
     * Checks whether close button exist
     * @return {Promise<boolean>}
     */
    closeButtonExists: async () =>
      base.$('[data-hook="modalMobileLayout-close-button"]').exists(),
  };
};
