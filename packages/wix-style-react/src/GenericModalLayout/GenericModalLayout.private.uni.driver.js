import { genericModalLayoutUniDriverFactory } from './GenericModalLayout.uni.driver';

export const genericModalLayoutPrivateUniDriverFactory = base => {
  return {
    ...genericModalLayoutUniDriverFactory(base),
    getHeaderTextContent: () =>
      base.$('[data-hook="generic-modal-layout-header"]').text(),

    getContentTextContent: () =>
      base.$('[data-hook="generic-modal-layout-content"]').text(),

    getFooterTextContent: () =>
      base.$('[data-hook="generic-modal-layout-footer"]').text(),
  };
};
