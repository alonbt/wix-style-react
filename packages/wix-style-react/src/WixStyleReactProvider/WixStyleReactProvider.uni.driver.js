import {
  baseUniDriverFactory,
  getDataAttributeValue,
} from '../../test/utils/unidriver';
import { featureToDataAttr, dataHooks } from './constants';

export const wixStyleReactProviderDriverFactory = (base, body) => {
  return {
    ...baseUniDriverFactory(base, body),

    /**
     * Checks whether the feature is active
     * @return {Promise<boolean>}
     */
    isFeatureActive: async featureName => {
      const featureDataAttrValue = await getDataAttributeValue(
        base,
        featureToDataAttr[featureName],
      );
      return featureDataAttrValue === 'true';
    },
  };
};
