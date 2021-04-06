import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

export const imageDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),
  };
};
