import React from 'react';
import CopyClipboard from './CopyClipboard';
import Registry from '@ui-autotools/registry';

const metadata = Registry.getComponentMetadata(CopyClipboard);

metadata.exportInfo = {
  path: 'src/CopyClipboard/CopyClipboard.js',
};

metadata.addSim({
  title: 'Simulation CopyClipboard with mandatory props',
  props: {
    value: 'https://www.wix-style-react.com',
    chidlren: () => <div></div>,
  },
});
