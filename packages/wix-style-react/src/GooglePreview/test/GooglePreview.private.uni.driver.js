import { googlePreviewDriverFactory as publicDriverFactory } from '../GooglePreview.uni.driver';

export const googlePreviewPrivateDriverFactory = base => {
  return {
    ...publicDriverFactory(base),

    // Add here driver methods that considered "private"
  };
};
