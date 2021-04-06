import { Category } from '../../../stories/storiesHierarchy';

export const storySettings = {
  category: Category.COMPONENTS,
  storyName: 'AudioPlayer',
  dataHook: 'story-audio-player',
  dataHookLazyLoad: 'story-audio-player-lazy-load',
  dataHookLoadError: 'story-audio-player-load-error',
};

export const testStories = {
  audioPlayer: 'Audio Player',
  audioPlayerLoadError: 'Audio Player Load Error',
  audioPlayerLazyLoad: 'Audio Player Lazy Load',
};
