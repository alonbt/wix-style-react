import { featureListDriverFactory as publicDriverFactory } from '../FeatureList.uni.driver';

export const featureListPrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),

    // Add here driver methods that considered "private"
  };
};
