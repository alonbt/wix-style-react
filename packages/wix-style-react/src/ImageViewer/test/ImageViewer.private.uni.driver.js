import { imageViewerUniDriverFactory as publicDriverFactory } from '../ImageViewer.uni.driver';

export const imageViewerPrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),
  };
};
