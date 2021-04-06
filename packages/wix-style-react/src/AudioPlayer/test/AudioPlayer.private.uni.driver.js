import { audioPlayerDriverFactory as publicDriverFactory } from '../AudioPlayer.uni.driver';
import eventually from 'wix-eventually';
import { dataHooks } from '../constants';
import { secondsToISO } from '../utils';

export const audioTestFileDurationInSeconds = 7; // audio-test-file.mp3

/**
 * Note: Testing AudioPlayer is not possible in JSdom due to the web audio API.
 */
export const audioPlayerPrivateDriverFactory = (base, body) => {
  const publicDriver = publicDriverFactory(base, body);
  const audioPlayerSliderHandle = base.$(
    `[data-hook=${dataHooks.audioPlayerSliderHandle}]`,
  );
  const audioPlayerSlider = base.$(
    `[data-hook=${dataHooks.audioPlayerSlider}]`,
  );

  return {
    ...publicDriver,
    waitForFileToLoad: async () => {
      await eventually(() =>
        expect(
          publicDriver.timeIndicatorText() ===
            secondsToISO(audioTestFileDurationInSeconds),
        ),
      );
    },
    sliderElement: () => audioPlayerSlider,
    sliderHandleElement: () => audioPlayerSliderHandle,
    isPlayButtonExists: () =>
      base.$(`[data-hook=${dataHooks.audioPlayerPlay}]`).exists(),
    isPauseButtonExists: () =>
      base.$(`[data-hook=${dataHooks.audioPlayerPause}]`).exists(),
    isLoaderButtonExists: () =>
      base.$(`[data-hook=${dataHooks.audioPlayerLoad}]`).exists(),
  };
};
