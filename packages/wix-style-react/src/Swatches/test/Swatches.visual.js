import React from 'react';
import { storiesOf } from '@storybook/react';
import Swatches from '../Swatches';
import Box from '../../Box';

const commonProps = {
  colors: [
    '#000',
    '#fff',
    'red',
    'cyan',
    'rgb(200, 100, 0)',
    'turquoise',
    'beige',
  ],
};

const tests = [
  {
    describe: 'sanity', // prop name (e.g. size)
    its: [
      {
        it: 'works', // prop variation (e.g. small)
        props: {},
      },
    ],
  },
  {
    describe: 'columns', // prop name (e.g. size)
    its: [
      {
        it: '6 columns', // prop variation (e.g. small)
        props: {
          columns: 6,
        },
      },
      {
        it: '4 columns', // prop variation (e.g. small)
        props: {
          columns: 4,
        },
      },
      {
        it: '2 columns', // prop variation (e.g. small)
        props: {
          columns: 2,
        },
      },
    ],
  },
  {
    describe: 'No Color', // prop name (e.g. size)
    its: [
      {
        it: '6 columns', // prop variation (e.g. small)
        props: {
          showClear: true,
        },
      },
    ],
  },
  {
    describe: 'No Color', // prop name (e.g. size)
    its: [
      {
        it: 'no color swatch', // prop variation (e.g. small)
        props: {
          showClear: true,
        },
      },
    ],
  },
  {
    describe: 'Add button', // prop name (e.g. size)
    its: [
      {
        it: 'button', // prop variation (e.g. small)
        props: {
          showAddButton: true,
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`Swatches${describe ? '/' + describe : ''}`, module).add(
      it,
      () => (
        <Box width="204px">
          <Swatches {...commonProps} {...props} />
        </Box>
      ),
    );
  });
});
