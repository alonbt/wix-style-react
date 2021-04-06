import { baseUniDriverFactory } from '../../test/utils/unidriver';

export const browserPreviewWidgetDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),
  };
};
