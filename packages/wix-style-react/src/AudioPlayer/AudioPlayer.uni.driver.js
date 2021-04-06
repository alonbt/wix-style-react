import { baseUniDriverFactory, findByHook } from '../../test/utils/unidriver';
import { dataHooks } from './constants';
import { iconButtonDriverFactory } from '../IconButton/IconButton.uni.driver';
import { headingUniDriverFactory } from '../Heading/Heading.uni.driver';

/**
 * Note: Testing AudioPlayer is not possible in JSdom due to the web audio API.
 */
export const audioPlayerDriverFactory = (base, body) => {
  const playPauseButtonDriver = iconButtonDriverFactory(
    findByHook(base, dataHooks.audioPlayerPlayPause),
  );
  const timeIndicatorDriver = headingUniDriverFactory(
    findByHook(base, dataHooks.audioTimeIndicator),
  );

  return {
    ...baseUniDriverFactory(base, body),

    /**
     * Clicks on play/pause button
     * @return {Promise<void>}
     */
    clickOnPlayPauseButton: () => playPauseButtonDriver.click(),

    /**
     * Gets time indicator text
     * @return {Promise<string>}
     */
    timeIndicatorText: () => timeIndicatorDriver.getText(),
  };
};
