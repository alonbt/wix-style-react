import {
  baseUniDriverFactory,
  findByHook,
  countByHook,
} from '../../test/utils/unidriver';
import { dataHooks } from './constants';
import { textUniDriverFactory } from '../Text/Text.uni.driver';

export const featureListDriverFactory = (base, body) => {
  return {
    ...baseUniDriverFactory(base, body),

    /**
     * Gets the number of the features that exist in the footer
     * @returns {Promise<number>}
     */
    getNumberOfFeatures: async () => countByHook(base, dataHooks.feature),

    /**
     * Checks whether feature's title exist
     * @param {number} featureIndex - the index of the feature in the features array (starts from 0)
     * @returns {Promise<boolean>}
     */
    hasFeatureTitle: async featureIndex =>
      await findByHook(
        base,
        `${dataHooks.featureTitle}${featureIndex}`,
      ).exists(),

    /**
     * Gets the feature's title
     * @param {number} featureIndex - the index of the feature in the features array (starts from 0)
     * @returns {Promise<string>}
     */
    getFeatureTitle: async featureIndex =>
      (
        await textUniDriverFactory(
          await findByHook(base, `${dataHooks.featureTitle}${featureIndex}`),
        )
      ).getText(),

    /**
     * Checks whether feature's text exist
     * @param {number} featureIndex - the index of the feature in the features array (starts from 0)
     * @returns {Promise<boolean>}
     */
    hasFeatureText: async featureIndex =>
      await findByHook(
        base,
        `${dataHooks.featureText}${featureIndex}`,
      ).exists(),

    /**
     * Gets the feature's text
     * @param {number} featureIndex - the index of the feature in the features array (starts from 0)
     * @returns {Promise<string>}
     */
    getFeatureText: async featureIndex =>
      (
        await textUniDriverFactory(
          await findByHook(base, `${dataHooks.featureText}${featureIndex}`),
        )
      ).getText(),

    /**
     * Checks whether the feature has an image node with the given predicate.
     * @param {number} featureIndex - the index of the feature in the features array (starts from 0)
     * @param {string} predicate - a predicate for the image node
     * @returns {Promise<boolean>}
     */
    hasFeatureImage: async (featureIndex, predicate) =>
      await findByHook(base, `${dataHooks.featureImage}${featureIndex}`)
        .$(predicate)
        .exists(),
  };
};
