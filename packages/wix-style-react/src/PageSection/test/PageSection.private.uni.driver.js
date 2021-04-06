import { pageSectionDriverFactory as publicDriverFactory } from '../PageSection.uni.driver';

export const pageSectionPrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),

    // Add here driver methods that considered "private"
  };
};
