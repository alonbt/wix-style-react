import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

export const dividerDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),
  };
};
