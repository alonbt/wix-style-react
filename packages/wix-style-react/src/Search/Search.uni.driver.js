import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { inputWithOptionsUniDriverFactory } from '../InputWithOptions/InputWithOptions.uni.driver';

export const searchUniDriverFactory = (base, body) => {
  const inputWithOptionsUniDriver = inputWithOptionsUniDriverFactory(
    base.$(`[data-hook="search-inputwithoptions"]`),
    body,
  );

  return {
    ...baseUniDriverFactory(base),
    ...inputWithOptionsUniDriver,
    driver: {
      ...inputWithOptionsUniDriver.driver,
      isExpandable: async () => !!(await base.attr('data-expandable')),
      isCollapsed: async () => !!(await base.attr('data-collapsed')),
    },
  };
};
