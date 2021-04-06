import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

import { dataHooks } from './constants';

export const sidebarHeaderDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),

    getTitle: () => base.$(`[data-hook="${dataHooks.title}"]`).text(),
    getSubtitle: () => base.$(`[data-hook="${dataHooks.subtitle}"]`).text(),
    getChildren: () => base.$(`[data-hook="${dataHooks.children}"]`),
  };
};
