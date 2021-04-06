import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

export const paletteDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),
  };
};
