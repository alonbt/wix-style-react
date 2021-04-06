import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { dataHooks } from './ContactItemBuilderDataHooks';

export const contactItemBuilderUniDriverFactory = base => {
  const title = base.$(`[data-hook="${dataHooks.pickerOptionTitle}"]`);
  const subtitle = base.$(`[data-hook="${dataHooks.pickerOptionSubtitle}"]`);

  return {
    ...baseUniDriverFactory(base),
    getTitle: () => title.text(),
    getSubtitle: () => subtitle.text(),
  };
};
