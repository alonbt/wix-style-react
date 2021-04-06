import ImageViewer from './ImageViewer';
import Registry from '@ui-autotools/registry';

const metadata = Registry.getComponentMetadata(ImageViewer);

metadata.exportInfo = {
  path: 'src/ImageViewer/ImageViewer.js',
};
