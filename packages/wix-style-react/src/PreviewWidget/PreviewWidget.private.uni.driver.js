import { previewWidgetDriverFactory as publicDriverFactory } from './PreviewWidget.uni.driver';

import { dataHooks } from './constants';

export const previewWidgetPrivateDriverFactory = base => ({
  ...publicDriverFactory(base),

  /** Get content area node */
  getContent: () => base.$(`[data-hook="${dataHooks.contentArea}"]`),
});
