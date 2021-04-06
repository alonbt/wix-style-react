import React, { memo, useCallback, useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { st, classes, vars } from './AudioPlayer.st.css';
import Tooltip from '../Tooltip';
import IconButton from '../IconButton';
import Loader from '../Loader';
import Heading from '../Heading';
import PlayFilled from 'wix-ui-icons-common/PlayFilled';
import PauseFilled from 'wix-ui-icons-common/PauseFilled';
import { dataHooks } from './constants';
import { useAudioManager } from './AudioManager/AudioManager';
import { positionToSeconds, secondsToISO, secondsToPosition } from './utils';

/** AudioPlayer */
const AudioPlayer = memo(
  ({
    dataHook,
    className,
    src,
    format,
    preload,
    webAudioAPI,
    onLoad,
    onLoadError,
    onPlay,
    onPause,
    onEnd,
    onSeek,
  }) => {
    const [isSliderLocked, setIsSliderLocked] = useState(true);
    const [hoverPosition, setHoverPosition] = useState(0);
    const [handleSizeInPercentage, setHandleSizeInPercentage] = useState(0);
    const [playing, setPlaying] = useState(false);
    const [showDuration, setShowDuration] = useState(true);

    const _onDestroy = useCallback(() => {
      setPlaying(false);
      setShowDuration(true);
    }, [setPlaying, setShowDuration]);

    const _onEnd = useCallback(() => {
      setShowDuration(true);
      setPlaying(false);
      onEnd && onEnd();
    }, [onEnd, setShowDuration, setPlaying]);

    const { loadingState, duration, seek, setSeek } = useAudioManager({
      src,
      format,
      preload,
      webAudioAPI,
      onLoad,
      onLoadError,
      onPlay,
      onSeek,
      onPause,
      playing,
      onDestroy: _onDestroy,
      onEnd: _onEnd,
      allowSeekLoop: isSliderLocked,
    });

    const isLoaded = loadingState === 'loaded';

    const _hoverISO = useMemo(() => {
      if (!isLoaded) {
        return secondsToISO(0, false, duration);
      }

      return secondsToISO(
        positionToSeconds(hoverPosition, duration),
        true,
        duration,
      );
    }, [isLoaded, hoverPosition, duration]);

    // takes the current seek (in seconds) and converts it to slider position.
    const _seekPercentage = useMemo(() => {
      if (!isLoaded) {
        return 0;
      }

      return secondsToPosition(seek, duration);
    }, [isLoaded, seek, duration]);

    const _togglePlayPause = useCallback(() => {
      setShowDuration(false);

      if (playing) {
        setPlaying(false);
      } else {
        setPlaying(true);
      }
    }, [playing, setPlaying, setShowDuration]);

    const _playPauseButtonContent = useMemo(() => {
      if (loadingState === 'loading') {
        return (
          <span data-hook={dataHooks.audioPlayerLoad}>
            <Loader size="tiny" />
          </span>
        );
      }

      return playing ? (
        <PauseFilled data-hook={dataHooks.audioPlayerPause} />
      ) : (
        <PlayFilled data-hook={dataHooks.audioPlayerPlay} />
      );
    }, [loadingState, playing]);

    const _setSliderPositions = useCallback(
      (x, width, clickX) => {
        const positionInPixels = ((clickX - x) / width) * 100;
        const position = Math.min(Math.max(positionInPixels, 0), 100);

        setHandleSizeInPercentage((12 / width) * 100);
        setHoverPosition(position);
      },
      [setHoverPosition],
    );

    const _handleSliderMouseDown = useCallback(
      event => {
        const { clientX, currentTarget } = event;
        const { x, width } = currentTarget.getBoundingClientRect();

        setIsSliderLocked(false);
        _setSliderPositions(x, width, clientX);
      },
      [_setSliderPositions, setIsSliderLocked],
    );

    const _handleSliderMouseMove = useCallback(
      event => {
        const { clientX, currentTarget } = event;
        const { x, width } = currentTarget.getBoundingClientRect();

        _setSliderPositions(x, width, clientX);
      },
      [_setSliderPositions],
    );

    const _handleSliderMouseUp = useCallback(() => {
      setIsSliderLocked(true);
    }, [setIsSliderLocked]);

    useEffect(() => {
      window.addEventListener('mouseup', _handleSliderMouseUp);

      return () => window.removeEventListener('mouseup', _handleSliderMouseUp);
    }, [_handleSliderMouseUp]);

    // seek audio file to the slider location when dragged.
    useEffect(() => {
      if (!isSliderLocked) {
        setSeek(positionToSeconds(hoverPosition, duration));
        setShowDuration(false);
      }
    }, [duration, hoverPosition, isSliderLocked, setSeek]);

    return (
      <div className={st(classes.root, className)} data-hook={dataHook}>
        <IconButton
          size="small"
          onClick={_togglePlayPause}
          dataHook={dataHooks.audioPlayerPlayPause}
          className={classes.playPauseButton}
        >
          {_playPauseButtonContent}
        </IconButton>
        <div
          data-hook={dataHooks.audioPlayerSlider}
          className={classes.slider}
          style={{
            [vars['audio-player-position']]: `${_seekPercentage}%`,
          }}
          onMouseDown={_handleSliderMouseDown}
          onMouseMove={_handleSliderMouseMove}
        >
          <div className={classes.track} />
          <div
            className={classes.tooltip}
            style={{ left: `${hoverPosition}%` }}
          >
            <Tooltip content={`${_hoverISO}`}>
              <div className={classes.tooltipTarget} />
            </Tooltip>
          </div>
          <div
            data-hook={dataHooks.audioPlayerSliderHandle}
            className={st(classes.handle, {
              grow:
                isLoaded &&
                (!isSliderLocked ||
                  Math.abs(_seekPercentage - hoverPosition) <
                    handleSizeInPercentage),
            })}
            style={{ left: `${_seekPercentage}%` }}
          />
        </div>
        <Heading
          appearance="H5"
          className={classes.timer}
          dataHook={dataHooks.audioTimeIndicator}
        >
          {showDuration
            ? secondsToISO(duration, isLoaded, duration)
            : secondsToISO(seek, isLoaded, duration)}
        </Heading>
      </div>
    );
  },
);

AudioPlayer.displayName = 'AudioPlayer';

AudioPlayer.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,

  /**
   The source to the track to be loaded for the sound (URL or base64 data URI). If your file has no extension, you will need to explicitly specify the extension using the format property.
   */
  src: PropTypes.string.isRequired,

  /**
   AudioPlayer detects your file format from the extension, but you may also specify a format in situations where extraction won't work (such as with a SoundCloud stream).
   */
  format: PropTypes.string,

  /**
   Determines if file should be downloaded completely, only its metadata or none at all when the component is rendered.
   when webAudioAPI = true one can only set either 'auto' or 'none'.
   when webAudioAPI = false one can set either 'auto', 'metadata' or 'none'
   */
  preload: PropTypes.oneOf(['auto', 'metadata', 'none']),

  /**
   Set to true to force web audio API. This should be used for relatively small audio files because then you have to wait for the full file to be downloaded and decoded before playing.
   Web Audio API allows advanced capabilities as described in [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
   */
  webAudioAPI: PropTypes.bool,

  /**
   Will be called when audio is loaded.
   */
  onLoad: PropTypes.func,

  /**
   Will be called when audio failed to load.
   */
  onLoadError: PropTypes.func,

  /**
   Will be called when audio is played.
   */
  onPlay: PropTypes.func,

  /**
   Will be called when audio is paused.
   */
  onPause: PropTypes.func,

  /**
   Will be called when audio is ended.
   */
  onEnd: PropTypes.func,

  /**
   Will be called when audio is seeked explicitly (i.e. when dragging the slider).
   */
  onSeek: PropTypes.func,
};

AudioPlayer.defaultProps = {
  preload: 'metadata',
  webAudioAPI: false,
};

export default AudioPlayer;
