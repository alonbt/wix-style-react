import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Howl } from 'howler';

// A callback that keeps its instance and won't make Howler to re create every time
const useStableCallback = callback => {
  const callbackRef = useRef();
  callbackRef.current = callback;

  return useCallback(
    (...args) => callbackRef.current && callbackRef.current(...args),
    [],
  );
};

const useRaf = ({ callback, enabled }) => {
  const stableCallback = useStableCallback(callback);

  // we use useLayoutEffect here because it fires synchronously after all DOM mutations
  // and before the next requestAnimationFrame. If we use useEffect (which runs after requestAnimationFrame)
  // we'll get an endless loop of frames that causes a memory leak.
  useLayoutEffect(() => {
    if (enabled) {
      let id;
      const loop = () => {
        stableCallback();
        id = requestAnimationFrame(loop);
      };

      id = requestAnimationFrame(loop);

      return () => {
        cancelAnimationFrame(id);
      };
    }
  }, [enabled, stableCallback]);
};

export const useAudioManager = ({
  src,
  playing,
  format,
  preload,
  webAudioAPI,
  allowSeekLoop,
  onEnd,
  onLoad,
  onPlay,
  onPause,
  onSeek,
  onLoadError,
  onDestroy,
}) => {
  const stableOnEnd = useStableCallback(onEnd);
  const stableOnLoad = useStableCallback(onLoad);
  const stableOnPlay = useStableCallback(onPlay);
  const stableOnPause = useStableCallback(onPause);
  const stableOnSeek = useStableCallback(onSeek);
  const stableOnLoadError = useStableCallback(onLoadError);
  const stableOnDestroy = useStableCallback(onDestroy);

  const audioManager = useRef();
  const [_seek, _setSeek] = useState(0);
  const [loadingState, setLoadingState] = useState('unloaded');
  const [wasEverPlayed, setWasEverPlayed] = useState(false);

  const duration = useMemo(() => {
    if (!audioManager.current || loadingState !== 'loaded') {
      return 0;
    }

    return audioManager.current.duration();
  }, [loadingState]);

  const _destroy = useCallback(() => {
    if (audioManager.current) {
      setLoadingState('unloaded');
      setWasEverPlayed(false);
      _setSeek(0);
      audioManager.current.stop();
      audioManager.current.unload();
      audioManager.current = null;
      stableOnDestroy();
    }
  }, [setLoadingState, setWasEverPlayed, _setSeek, stableOnDestroy]);

  const _onPlay = useCallback(() => {
    setWasEverPlayed(true);
    stableOnPlay();
  }, [stableOnPlay, setWasEverPlayed]);

  const _onLoad = useCallback(() => {
    // Keeping a duplicate state because when Howler state changes it won't cause a render
    // and we want to react to this change.
    setLoadingState(audioManager.current.state());
    stableOnLoad();
  }, [stableOnLoad, setLoadingState]);

  const _onEnd = useCallback(() => {
    _setSeek(0);
    stableOnEnd();
  }, [stableOnEnd, _setSeek]);

  const _onLoadError = useCallback(
    (_, errorMsg) => {
      stableOnLoadError(errorMsg);
    },
    [stableOnLoadError],
  );

  const _load = useCallback(() => {
    if (audioManager.current) {
      audioManager.current.load();
      setLoadingState(audioManager.current.state());
    }
  }, [setLoadingState]);

  const _play = useCallback(() => {
    if (audioManager.current) {
      if (loadingState === 'unloaded') {
        _load();
      }

      if (loadingState === 'loaded' && !audioManager.current.playing()) {
        audioManager.current.play();
      }
    }
  }, [loadingState, _load]);

  const _pause = useCallback(() => {
    if (audioManager.current) {
      audioManager.current.pause();
    }
  }, []);

  // There is an open bug in howler that if play is locked it returns the howler object when
  // getting "seek" instead of a number. this solves the issue until they fix it,.
  // https://github.com/goldfire/howler.js/issues/1189
  const _readSeek = useCallback(() => {
    if (!audioManager.current || loadingState !== 'loaded') {
      return 0;
    }

    let currentSeek = audioManager.current.seek();

    if (typeof currentSeek !== 'number') {
      const internalSeek = audioManager.current._sounds[0]._seek;

      if (typeof internalSeek !== 'number') {
        currentSeek = 0;
      }

      currentSeek = internalSeek;
    }

    return currentSeek;
  }, [loadingState]);

  const _updateSeek = useCallback(() => {
    // Keeping a duplicate seek state because when Howler seek changes it won't cause a render
    // and we want to react to this change (expose an updated seek to audioManager consumer).
    _setSeek(_readSeek());
  }, [_readSeek]);

  const setSeek = useCallback(
    pos => {
      if (audioManager.current && loadingState === 'loaded') {
        audioManager.current.seek(pos);
        _setSeek(pos);
      }
    },
    [loadingState],
  );

  // starts a request animation frame loop that updates the seek every frame.
  // stops the loop if paused or if slider is being dragged
  useRaf({ callback: _updateSeek, enabled: playing && allowSeekLoop });

  useEffect(() => {
    if (src) {
      audioManager.current = new Howl({
        src: src,
        format: format,
        preload:
          preload === 'none' ? false : preload === 'auto' ? true : preload,
        onload: _onLoad,
        html5: !webAudioAPI,
        onend: _onEnd,
        onplay: _onPlay,
        onloaderror: _onLoadError,
        onpause: stableOnPause,
        onseek: stableOnSeek,
      });
    }

    return () => _destroy();
  }, [
    audioManager,
    _destroy,
    format,
    src,
    _onEnd,
    _onLoad,
    _onLoadError,
    stableOnPlay,
    stableOnPause,
    stableOnSeek,
    preload,
    webAudioAPI,
    _onPlay,
  ]);

  useEffect(() => {
    if (playing) {
      _play();
    }

    if (!playing && wasEverPlayed) {
      _pause();
    }
  }, [_pause, _play, playing, wasEverPlayed]);

  return useMemo(
    () => ({
      loadingState,
      duration,
      seek: _seek,
      setSeek,
    }),
    [loadingState, duration, _seek, setSeek],
  );
};
