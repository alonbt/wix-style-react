import { dropzoneDriverFactory as publicDriverFactory } from '../Dropzone.uni.driver';
import { Simulate } from 'react-dom/test-utils';

const dataTransferFromFiles = files => ({
  files,
  items: files.map(f => ({
    kind: 'file',
    type: f.type,
    getAsFile: () => f,
  })),
  types: ['Files'],
});

export const dropzonePrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),

    hover: files =>
      base.getNative().then(el =>
        Simulate.dragEnter(el, {
          dataTransfer: dataTransferFromFiles(files),
        }),
      ),
    unhover: () => base.getNative().then(el => Simulate.dragLeave(el)),
  };
};
