import {
  baseUniDriverFactory,
  countByHook,
  findByHook,
  findByHookAtIndex,
} from '../../test/utils/unidriver';
import { dataHooks } from './constants';

export const avatarGroupDriverFactory = (base, body) => {
  return {
    ...baseUniDriverFactory(base, body),

    /**
     * Gets the number Of displayed Avatars
     * @returns {Promise<number>}
     */
    getVisibleAvatarsCount: async () => {
      let numberOfAvatars = await countByHook(base, dataHooks.avatarGroupItem);
      const isMoreIndicatorExist = await (
        await findByHook(base, dataHooks.avatarGroupMoreItem)
      ).exists();
      if (isMoreIndicatorExist) {
        numberOfAvatars++;
      }
      return numberOfAvatars;
    },

    /**
     * Gets the text content
     * @param {number} index Avatar index
     * @returns {Promise<string>}
     */
    getVisibleAvatarTextContentByIndex: async index =>
      await findByHookAtIndex(base, dataHooks.avatarGroupItem, index).text(),

    /**
     * Gets the moreIndicator content
     * @returns {Promise<string>}
     */
    getMoreIndicatorContent: async () =>
      await (await findByHook(base, dataHooks.avatarGroupMoreItem)).text(),

    /**
     * Checks whether the moreIndicatior exists
     * @returns {Promise<boolean>}
     */
    isMoreIndicatorExist: async () =>
      await (await findByHook(base, dataHooks.avatarGroupMoreItem)).exists(),
  };
};
