import { MobileDrawer, MobileDrawerProps } from '.';
import Registry from '@ui-autotools/registry';

const MobileDrawerMetadata = Registry.getComponentMetadata(MobileDrawer);
MobileDrawerMetadata.nonReactStrictModeCompliant = true;

MobileDrawerMetadata.addSim({
  title: 'render',
  props: {
    isOpen: true,
    children: 'Children',
    ariaLabel: 'example aria lable',
    ariaDescribedby: 'example aria describedby',
  } as MobileDrawerProps,
});
