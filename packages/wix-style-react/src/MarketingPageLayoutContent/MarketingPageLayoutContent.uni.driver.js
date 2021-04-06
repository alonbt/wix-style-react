import { baseUniDriverFactory, findByHook } from '../../test/utils/unidriver';
import { dataHooks } from './constants';
import { textUniDriverFactory } from '../Text/Text.uni.driver';
import { headingUniDriverFactory } from '../Heading/Heading.uni.driver';

export const marketingPageLayoutContentDriverFactory = (base, body) => {
  return {
    ...baseUniDriverFactory(base, body),

    /**
     * Checks whether outline exist
     * @returns {Promise<boolean>}
     */
    hasOverline: async () =>
      await findByHook(base, dataHooks.overlineContainer).exists(),

    /**
     *  Gets the overline text
     * @returns {Promise<string>}
     */
    getOverlineText: async () =>
      (
        await textUniDriverFactory(await findByHook(base, dataHooks.overline))
      ).getText(),

    /**
     * Checks whether title exist
     * @returns {Promise<boolean>}
     */
    hasTitle: async () =>
      await findByHook(base, dataHooks.titleContainer).exists(),

    /**
     * Gets the title text
     * @returns {Promise<string>}
     */
    getTitleText: async () =>
      (
        await headingUniDriverFactory(await findByHook(base, dataHooks.title))
      ).getText(),

    /**
     * Checks whether subtitle exist
     * @returns {Promise<boolean>}
     */
    hasSubtitle: async () =>
      await findByHook(base, dataHooks.subtitleContainer).exists(),

    /**
     * Gets the subtitle text
     * @returns {Promise<string}
     */
    getSubtitleText: async () =>
      (
        await headingUniDriverFactory(
          await findByHook(base, dataHooks.subtitle),
        )
      ).getText(),

    /**
     * Checks whether content exist
     * @returns {Promise<boolean>}
     */
    hasContent: async () =>
      await findByHook(base, dataHooks.contentContainer).exists(),

    /**
     * Gets the content text
     * @returns {Promise<string>}
     */
    getContentText: async () =>
      (
        await textUniDriverFactory(await findByHook(base, dataHooks.content))
      ).getText(),

    /**
     * Checks whether actions exist
     * @returns {Promise<boolean>}
     */
    hasActions: async () => await findByHook(base, dataHooks.actions).exists(),

    /**
     * Checks whether a node with the provided predicate exist
     * @param {string} predicate - a predicate for the child node
     * @returns {Promise<boolean>}
     */
    childExists: async predicate => base.$(predicate).exists(),
  };
};
