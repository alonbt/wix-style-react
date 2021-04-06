import AudioPlayer from './AudioPlayer';
import Registry from '@ui-autotools/registry';

const metadata = Registry.getComponentMetadata(AudioPlayer);

metadata.exportInfo = {
  path: 'src/AudioPlayer/AudioPlayer.js',
};
