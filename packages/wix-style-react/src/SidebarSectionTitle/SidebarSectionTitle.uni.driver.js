import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

export const sidebarSectionTitleDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),

    getText: () => base.text(),
  };
};
