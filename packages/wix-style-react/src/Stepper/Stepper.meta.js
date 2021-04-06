import Stepper from './Stepper';
import Registry from '@ui-autotools/registry';

const metadata = Registry.getComponentMetadata(Stepper);
metadata.nonReactStrictModeCompliant = true;

metadata.exportInfo = {
  path: 'src/Stepper/Stepper.js',
};

metadata.addSim({
  title: 'Simulation of long step texts that are rendered with ellipsis',
  props: {
    steps: [
      { text: 'This is a long step name' },
      { text: 'This is a long step name', type: 'disabled' },
      { text: 'This is a long step name', type: 'disabled' },
      { text: 'This is a long step name', type: 'disabled' },
      { text: 'This is a long step name', type: 'disabled' },
      { text: 'This is a long step name', type: 'disabled' },
      { text: 'This is a long step name', type: 'disabled' },
    ],
    onClick: () => {},
    activeStep: 0,
  },
});
