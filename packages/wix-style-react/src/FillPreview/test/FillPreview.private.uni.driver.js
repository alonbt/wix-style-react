import { fillPreviewDriverFactory as publicDriverFactory } from '../FillPreview.uni.driver';

export const fillPreviewPrivateDriverFactory = base => {
  return {
    ...publicDriverFactory(base),
  };
};
