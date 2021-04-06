import { baseUniDriverFactory } from '../../test/utils/unidriver';

export const genericModalLayoutUniDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),
    /**
     * Checks whether modal is fullscreen
     * @returns {Promise<boolean>}
     */
    isFullscreen: () => base.hasClass('fullscreenContainer'),
  };
};
