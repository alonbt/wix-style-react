import React from 'react';
import { storiesOf } from '@storybook/react';
import WixStyleReactProvider from '../../../WixStyleReactProvider';

import Subheader from '..';
import Button from '../../../Button';

const suffix = (
  <Button onClick={() => undefined} size="small" theme="fullblue">
    Button
  </Button>
);

const tests = [
  {
    describe: 'Subheader',
    its: [
      {
        it: 'Basic',
        props: {
          title: 'Subheader title',
          suffix,
        },
      },
      {
        it: 'Neutral skin',
        props: {
          title: 'Subheader title',
          skin: 'neutral',
          suffix,
        },
      },
      {
        it: 'Title ellipsis',
        props: {
          title: 'Title '.repeat(100),
          suffix,
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`Card${describe ? '/' + describe : ''}`, module).add(it, () => (
      <Subheader {...props} />
    ));
  });
});

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`Layout And Spacing| Card/${describe}`, module).add(it, () => (
      <WixStyleReactProvider
        features={{ reducedSpacingAndImprovedLayout: true }}
      >
        <Subheader {...props} />
      </WixStyleReactProvider>
    ));
  });
});
