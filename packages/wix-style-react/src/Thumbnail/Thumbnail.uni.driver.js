import { baseUniDriverFactory } from '../../test/utils/unidriver';
import { textUniDriverFactory } from '../Text/Text.uni.driver';
import { dataHooks } from './constants';

export const thumbnailDriverFactory = base => {
  const byHook = hook => base.$(`[data-hook*="${hook}"]`);
  const getThumbnailWrapper = () => byHook(dataHooks.thumbnailWrapper);
  const getStyle = async (element, rule) =>
    (await element.attr('style')).match(new RegExp(`${rule}: (.*?);`))[1];

  return {
    ...baseUniDriverFactory(base),

    /**
     * Gets thumbnail title
     * @returns {Promise<string>}
     */
    getTitle: async () =>
      (
        await textUniDriverFactory(await byHook(dataHooks.thumbnailTitle))
      ).getText(),

    /**
     * Gets thumbnail description
     * @returns {Promise<string>}
     */
    getDescription: () => byHook(dataHooks.thumbnailDescription).text(),

    /**
     * Gets selected icon driver
     * @returns {Promise<UniDriver>}
     */
    getSelectedIcon: () => byHook(dataHooks.thumbnailSelectedIcon),

    /**
     * Gets background image driver
     * @returns {Promise<UniDriver>}
     */
    getBackgroundImage: () => byHook(dataHooks.thumbnailBackgroundImage),

    /**
     * Checks whether Thumbnail is selected
     * @returns {Promise<boolean>}
     */
    isSelected: async () =>
      (await getThumbnailWrapper().attr('data-selected')) === 'true',

    /**
     * Checks whether Thumbnail is disabled
     * @returns {Promise<boolean>}
     */
    isDisabled: async () =>
      (await getThumbnailWrapper().attr('data-disabled')) === 'true',

    /**
     * Gets thumbnail image driver
     * @returns {Promise<UniDriver>}
     */
    getImage: () => byHook(dataHooks.thumbnailImage),

    /**
     * Gets thumbnail width, if it's set through `width` prop
     * @returns {Promise<string>}
     */
    getWidth: async () => await getStyle(base, 'width'),

    /**
     *  Gets thumbnail height, if it's set through `height` prop
     * @returns {Promise<string>}
     * */
    getHeight: async () =>
      await getStyle(await getThumbnailWrapper(), 'height'),
  };
};
