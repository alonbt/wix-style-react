import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';
import AudioPlayer from '../AudioPlayer';
import { audioPlayerPrivateDriverFactory } from './AudioPlayer.private.uni.driver';
import { positionToSeconds, secondsToPosition, secondsToISO } from '../utils';

describe(AudioPlayer.displayName, () => {
  const render = createRendererWithUniDriver(audioPlayerPrivateDriverFactory);
  const src = 'audio-test-file.mp3';

  afterEach(cleanup);

  it('should render', async () => {
    const { driver } = render(<AudioPlayer src={src} />);

    expect(await driver.exists()).toBe(true);
  });

  it('should show --:-- when not loaded', async () => {
    const { driver } = render(<AudioPlayer src={src} preload="none" />);

    expect(await driver.timeIndicatorText()).toBe('--:--');
  });

  it('should return right time from position', () => {
    const duration = 60;

    expect(positionToSeconds(0, duration)).toBe(0);
    expect(positionToSeconds(25, duration)).toBe(15);
    expect(positionToSeconds(50, duration)).toBe(30);
    expect(positionToSeconds(75, duration)).toBe(45);
    expect(positionToSeconds(100, duration)).toBe(60);
  });

  it('should return right position from time', () => {
    const duration = 60;

    expect(secondsToPosition(0, duration)).toBe(0);
    expect(secondsToPosition(15, duration)).toBe(25);
    expect(secondsToPosition(30, duration)).toBe(50);
    expect(secondsToPosition(45, duration)).toBe(75);
    expect(secondsToPosition(60, duration)).toBe(100);
  });

  it('should return right ISO time from seconds', () => {
    const durationTenMins = 5 * 60;
    const durationUnderHour = 50 * 60;
    const durationOverHour = 30 * 60 * 60;

    // Not loaded
    expect(secondsToISO(0, false)).toBe('--:--');

    // Under 10 mins duration
    expect(secondsToISO(12, true, durationTenMins)).toBe('0:12');
    expect(secondsToISO(120, true, durationTenMins)).toBe('2:00');

    // Under hour duration
    expect(secondsToISO(12, true, durationUnderHour)).toBe('00:12');
    expect(secondsToISO(120, true, durationUnderHour)).toBe('02:00');
    expect(secondsToISO(1200, true, durationUnderHour)).toBe('20:00');

    // Over hour duration
    expect(secondsToISO(12, true, durationOverHour)).toBe('00:00:12');
    expect(secondsToISO(120, true, durationOverHour)).toBe('00:02:00');
    expect(secondsToISO(1200, true, durationOverHour)).toBe('00:20:00');
    expect(secondsToISO(12000, true, durationOverHour)).toBe('03:20:00');
    expect(secondsToISO(120000, true, durationOverHour)).toBe('09:20:00');
  });
});
