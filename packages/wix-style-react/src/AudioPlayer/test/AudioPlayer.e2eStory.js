import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import audioFile from '../../assets/audio-test-file.mp3';

import { getTestStoryKind } from '../../../stories/storiesHierarchy';
import { testStories, storySettings } from './storySettings';
import AudioPlayer from '..';

const kind = getTestStoryKind(storySettings);

const AudioPlayerWrapper = ({ dataHook, src }) => {
  const [loaded, setLoaded] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [played, setPlayed] = useState(false);
  const [paused, setPaused] = useState(false);
  const [ended, setEnded] = useState(false);
  const [seeked, setSeeked] = useState(false);

  return (
    <div>
      <AudioPlayer
        dataHook={dataHook}
        src={src}
        onLoad={() => setLoaded(true)}
        onLoadError={() => setLoadError(true)}
        onPlay={() => setPlayed(true)}
        onPause={() => setPaused(true)}
        onEnd={() => setEnded(true)}
        onSeek={() => setSeeked(true)}
      />
      <div
        data-hook="audio-player-test-div"
        data-loaded={loaded}
        data-load-error={loadError}
        data-played={played}
        data-paused={paused}
        data-ended={ended}
        data-seeked={seeked}
      />
    </div>
  );
};
storiesOf(kind, module).add(testStories.audioPlayer, () => {
  return (
    <AudioPlayerWrapper dataHook={storySettings.dataHook} src={audioFile} />
  );
});

storiesOf(kind, module).add(testStories.audioPlayerLoadError, () => {
  return (
    <AudioPlayerWrapper
      dataHook={storySettings.dataHookLoadError}
      src="broken-audio-url.mp3"
    />
  );
});

storiesOf(kind, module).add(testStories.audioPlayerLazyLoad, () => {
  return (
    <AudioPlayer
      dataHook={storySettings.dataHookLazyLoad}
      src="https://music.wixstatic.com/preview/84770f_29a80480c24f4946a477c8ad03b92cbc-128.mp3"
      preload="none"
      webAudioAPI
    />
  );
});
