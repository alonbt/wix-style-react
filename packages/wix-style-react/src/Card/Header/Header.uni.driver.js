import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { DataHooks } from './hooks';

export const headerUniDriverFactory = base => {
  const title = base.$(`[data-hook="${DataHooks.title}"]`);
  const subtitle = base.$(`[data-hook="${DataHooks.subtitle}"]`);

  return {
    ...baseUniDriverFactory(base),
    title: () => title.text(),
    subtitle: () => subtitle.text(),
  };
};
