import React from 'react';
import { storiesOf } from '@storybook/react';

import WixStyleReactProvider from '../../WixStyleReactProvider';
import ListOfCards from '../docs/examples/ListOfCards';
import MainAndSide from '../docs/examples/MainAndSide';
import Form from '../docs/examples/Form';
import HolyGrail from '../docs/examples/HolyGrail';

const layoutComponents = [
  ['ListOfCards', ListOfCards],
  ['MainAndSide', MainAndSide],
  ['Form', Form],
  ['HolyGrail', HolyGrail],
];

layoutComponents.forEach(([name, Component]) =>
  storiesOf('Layout', module).add(name, () => <Component />),
);

layoutComponents.forEach(([name, Component]) =>
  storiesOf('Layout And Spacing| Layout', module).add(name, () => (
    <WixStyleReactProvider features={{ reducedSpacingAndImprovedLayout: true }}>
      <Component />
    </WixStyleReactProvider>
  )),
);
