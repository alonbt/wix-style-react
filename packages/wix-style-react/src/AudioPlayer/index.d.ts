import * as React from 'react';

export interface AudioPlayerProps {
  dataHook?: string;
  className?: string;
  src: string;
  format?: string;
  preload?: 'metadata' | 'auto' | 'none';
  webAudioAPI?: boolean;
  onLoad?(): void;
  onLoadError?(errorMsg: string): void;
  onPlay?(): void;
  onPause?(): void;
  onEnd?(): void;
  onSeek?(): void;
}

declare const AudioPlayer: React.FC<AudioPlayerProps>;
export default AudioPlayer;
