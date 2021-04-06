import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { dataHooks } from './constants';

export const modalPreviewLayoutDriverFactory = base => {
  const getPreviewContent = () =>
    base.$(`[data-hook="${dataHooks.modalPreviewContent}"]`);

  return {
    ...baseUniDriverFactory(base),

    /** Click the overlay */
    clickOverlay: () =>
      base.$(`[data-hook="${dataHooks.innerOverlay}"]`).click(),

    /** Get the title node */
    getPreviewTitle: () =>
      base.$(`[data-hook="${dataHooks.modalPreviewTitle}"]`),

    /** Get the actions node */
    getPreviewActions: () =>
      base.$(`[data-hook="${dataHooks.modalPreviewActions}"]`),

    /** Get the content node */
    getPreviewContent,

    /** Click the close button */
    clickClose: () =>
      base.$(`[data-hook="${dataHooks.modalPreviewCloseButton}"]`).click(),

    /** Get the index of the rendered child */
    getCurrentChildIndex: async () =>
      Number(await getPreviewContent().attr('data-index')),
  };
};
