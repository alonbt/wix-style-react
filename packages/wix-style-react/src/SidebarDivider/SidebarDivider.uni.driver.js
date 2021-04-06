import {
  baseUniDriverFactory,
  getDataAttributeValue,
} from '../../test/utils/unidriver';

export const SidebarDividerDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),

    /**
     * Checks whether SidebarDivider is displayed in full width
     * @returns {Promise<boolean>}
     */
    isFullWidth: async () =>
      (await getDataAttributeValue(base, 'data-full-width')) === 'true',
  };
};
