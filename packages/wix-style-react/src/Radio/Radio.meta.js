import Radio from './Radio';
import Registry from '@ui-autotools/registry';

const metadata = Registry.getComponentMetadata(Radio);

metadata.exportInfo = {
  path: 'src/Radio/Radio.js',
};

metadata.addSim({
  checked: true,
});
