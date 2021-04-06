import {
  waitForVisibilityOf,
  protractorUniTestkitFactoryCreator,
  scrollToElement,
} from 'wix-ui-test-utils/protractor';
import { browser, $ } from 'protractor';
import {
  audioPlayerPrivateDriverFactory,
  audioTestFileDurationInSeconds,
} from './AudioPlayer.private.uni.driver';
import { createTestStoryUrl } from '../../../test/utils/storybook-helpers';
import { storySettings, testStories } from './storySettings';
import { sleep } from 'wix-ui-test-utils/react-helpers';
import { secondsToISO } from '../utils';
import eventually from 'wix-eventually';

describe('AudioPlayer', () => {
  let driver;
  const sliderPositionThreshold = 10; // due to handle radius
  const navigateToTestUrl = async testName => {
    const testStoryUrl = createTestStoryUrl({
      category: storySettings.category,
      storyName: storySettings.storyName,
      dataHook: storySettings.dataHook,
      testName,
    });
    await browser.get(testStoryUrl);
  };

  describe('Preload', () => {
    beforeEach(async () => {
      await navigateToTestUrl(testStories.audioPlayer);

      driver = protractorUniTestkitFactoryCreator(
        audioPlayerPrivateDriverFactory,
      )({
        dataHook: storySettings.dataHook,
      });

      await waitForVisibilityOf(
        await driver.element(),
        `Cannot find <AudioPlayer/> component with dataHook of ${storySettings.dataHook}`,
      );
      await scrollToElement(await driver.element());
    });

    const sliderHandlePosition = async () => {
      const sliderHandle = await driver.sliderHandleElement().getNative();
      return sliderHandle.getLocation();
    };

    const sliderWidth = async () => {
      const slider = await driver.sliderElement().getNative();
      return (await slider.getSize()).width;
    };

    it('should render', async () => {
      expect(await driver.exists()).toBe(true);
    });

    it('should show play/pause button icons respectfully to whether playing', async () => {
      await driver.waitForFileToLoad();

      expect(await driver.isPlayButtonExists()).toBe(true);

      await driver.clickOnPlayPauseButton();

      expect(await driver.isPauseButtonExists()).toBe(true);

      await driver.clickOnPlayPauseButton();

      expect(await driver.isPlayButtonExists()).toBe(true);
    });

    it('should show audio duration when not playing', async () => {
      await driver.waitForFileToLoad();
      expect(await driver.timeIndicatorText()).toBe('0:07');
    });

    it('should show updated seek when playing', async () => {
      await driver.waitForFileToLoad();
      await driver.clickOnPlayPauseButton();

      expect(await driver.timeIndicatorText()).toBe('0:00');

      await sleep(1000);

      expect(await driver.timeIndicatorText()).toBe('0:01');
    });

    it('should show updated seek when audio is paused', async () => {
      await driver.waitForFileToLoad();

      await driver.clickOnPlayPauseButton();
      await sleep(100);
      await driver.clickOnPlayPauseButton();

      const timeWhenPaused = await driver.timeIndicatorText();
      await sleep(1000);
      const timeAfter1Sec = await driver.timeIndicatorText();

      expect(timeWhenPaused).toBe(timeAfter1Sec);
    });

    it('should move slider forward while audio is playing', async () => {
      await driver.waitForFileToLoad();
      await driver.clickOnPlayPauseButton();

      const locationWhenPlayed = await sliderHandlePosition();
      await sleep(100);
      const locationAfter100Mili = await sliderHandlePosition();

      expect(locationAfter100Mili.x).toBeGreaterThan(locationWhenPlayed.x);
    });

    it('should not move slider forward whehn audio is paused', async () => {
      await driver.waitForFileToLoad();

      await driver.clickOnPlayPauseButton();
      await sleep(100);
      await driver.clickOnPlayPauseButton();

      const locationWhenPaused = await sliderHandlePosition();
      await sleep(100);
      const locationAfter100Mili = await sliderHandlePosition();

      expect(locationAfter100Mili.x).toBe(locationWhenPaused.x);
    });

    it('should move slider and update seek when dragging slider', async () => {
      await driver.waitForFileToLoad();

      const initialLocation = await sliderHandlePosition();
      const width = await sliderWidth();
      const middleSliderInPixels = Math.floor(width / 2);
      const middleTimeInISO = secondsToISO(
        Math.floor(audioTestFileDurationInSeconds / 2),
        true,
      );

      await browser
        .actions()
        .mouseMove(await driver.sliderHandleElement().getNative())
        .mouseDown()
        .mouseMove({ x: middleSliderInPixels, y: 0 })
        .perform();

      const locationAfterDrag = await sliderHandlePosition();

      expect(locationAfterDrag.x - initialLocation.x).toBeGreaterThanOrEqual(
        middleSliderInPixels - sliderPositionThreshold,
      );
      expect(locationAfterDrag.x - initialLocation.x).toBeLessThan(
        middleSliderInPixels + sliderPositionThreshold,
      );
      expect(await driver.timeIndicatorText()).toBe(middleTimeInISO);
    });

    it('should call onLoad when loaded', async () => {
      await driver.waitForFileToLoad();

      const testWrapper = $(`[data-hook="audio-player-test-div"]`);
      expect(testWrapper.getAttribute('data-loaded')).toBe('true');
    });

    it('should call onPlay when started playing', async () => {
      await driver.waitForFileToLoad();
      await driver.clickOnPlayPauseButton();
      await sleep(100);

      await eventually(async () => {
        const testWrapper = $(`[data-hook="audio-player-test-div"]`);
        expect(await testWrapper.getAttribute('data-played')).toBe('true');
      });
    });

    it('should call onPause when paused', async () => {
      await driver.clickOnPlayPauseButton();
      await driver.clickOnPlayPauseButton();
      await sleep(100);

      await eventually(async () => {
        const testWrapper = $(`[data-hook="audio-player-test-div"]`);
        expect(await testWrapper.getAttribute('data-paused')).toBe('true');
      });
    });

    it('should call onEnd when ended', async () => {
      await driver.waitForFileToLoad();
      const width = await sliderWidth();

      await browser
        .actions()
        .mouseMove(await driver.sliderHandleElement().getNative())
        .mouseDown()
        .mouseMove({ x: width - sliderPositionThreshold, y: 0 })
        .perform();

      await driver.clickOnPlayPauseButton();
      await sleep(100);

      const testWrapper = $(`[data-hook="audio-player-test-div"]`);
      expect(testWrapper.getAttribute('data-ended')).toBe('true');
    });

    it('should call onSeek when seeked', async () => {
      await driver.waitForFileToLoad();

      await browser
        .actions()
        .mouseMove(await driver.sliderHandleElement().getNative())
        .mouseDown()
        .mouseMove({ x: 200, y: 0 })
        .perform();

      const testWrapper = $(`[data-hook="audio-player-test-div"]`);
      expect(testWrapper.getAttribute('data-seeked')).toBe('true');
    });
  });

  describe('preload = none with webAudioAPI', () => {
    beforeEach(async () => {
      await navigateToTestUrl(testStories.audioPlayerLazyLoad);

      driver = protractorUniTestkitFactoryCreator(
        audioPlayerPrivateDriverFactory,
      )({
        dataHook: storySettings.dataHookLazyLoad,
      });

      await waitForVisibilityOf(
        await driver.element(),
        `Cannot find <AudioPlayer/> component with dataHook of ${storySettings.dataHookLazyLoad}`,
      );
      await scrollToElement(await driver.element());
    });

    it('should show --:-- instead of duration when not not loaded', async () => {
      expect(await driver.timeIndicatorText()).toBe('--:--');
    });

    it('should show loading/play button icons respectfully to whether loading', async () => {
      expect(await driver.isPlayButtonExists()).toBe(true);

      await driver.clickOnPlayPauseButton();
      await eventually(() => expect(driver.isLoaderButtonExists()).toBe(true));
    });
  });

  describe('Load Error', () => {
    beforeEach(async () => {
      await navigateToTestUrl(testStories.audioPlayerLoadError);

      driver = protractorUniTestkitFactoryCreator(
        audioPlayerPrivateDriverFactory,
      )({
        dataHook: storySettings.dataHookLoadError,
      });

      await waitForVisibilityOf(
        await driver.element(),
        `Cannot find <AudioPlayer/> component with dataHook of ${storySettings.dataHookLoadError}`,
      );
      await scrollToElement(await driver.element());
    });

    it('should call onLoadError if load failed', async () => {
      const testWrapper = $(`[data-hook="audio-player-test-div"]`);

      await eventually(() => {
        expect(testWrapper.getAttribute('data-load-error')).toBe('true');
      });
    });
  });
});
