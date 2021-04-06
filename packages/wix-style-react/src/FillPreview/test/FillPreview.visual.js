import React from 'react';
import { storiesOf } from '@storybook/react';
import FillPreview from '../FillPreview';

const tests = [
  {
    describe: 'Selected and disabled states',
    its: [
      {
        it: 'Simply selected',
        props: {
          fill: '#ffd7d7',
          selected: true,
        },
      },
      {
        it: 'Selected with no color',
        props: {
          selected: true,
        },
      },
      {
        it: 'Disabled state ',
        props: {
          fill: '#ffd7d7',
          disabled: true,
        },
      },
    ],
  },
  {
    describe: 'Gradients',
    its: [
      {
        it: 'linear-gradient',
        props: {
          fill:
            'linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)',
        },
      },
      {
        it: 'radial-gradient',
        props: {
          fill: 'radial-gradient(gold, orange, red)',
        },
      },
      {
        it: 'repeating-linear-gradient',
        props: {
          fill:
            'repeating-linear-gradient(-45deg, transparent, transparent 5px, black 5px, black 10px)',
        },
      },
      {
        it: 'repeating-radial-gradient',
        props: {
          fill:
            'repeating-radial-gradient(black, black 5px, white 5px, white 10px)',
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`FillPreview${describe ? '/' + describe : ''}`, module).add(
      it,
      () => <FillPreview {...props} />,
    );
  });
});
