import React from 'react';
import { storiesOf } from '@storybook/react';
import FloatingHelper from '../FloatingHelper';
import Box from '../../Box';

import {
  floatingHelperAppearance,
  appendToOptions,
  placementOptions,
} from '../constants';

const body =
  'In order to sell your music you need to choose a payment method. ';

const requiredProps = {
  content: <FloatingHelper.Content body={body} />,
  target: <span>I am a FloatingHelper target</span>,
  placement: placementOptions.right,
};

const defaultProps = {
  appearance: floatingHelperAppearance.dark,
  appendTo: appendToOptions.window,
  initiallyOpened: true,
  width: '444px',
};

const appearances = Object.values(floatingHelperAppearance);

const tests = [
  {
    describe: 'sanity',
    its: [
      {
        it: 'default',
        props: {},
      },
    ],
  },
  {
    describe: 'appearance',
    its: appearances.map(appearance => ({
      it: appearance,
      props: { appearance },
    })),
  },
  {
    describe: 'initiallyOpened',
    its: [true, false].map(initiallyOpened => ({
      it: initiallyOpened.toString(),
      props: { initiallyOpened },
    })),
  },
  {
    describe: 'width',
    its: [
      {
        it: 'default',
        props: {},
      },
      {
        it: 'number',
        props: { width: 500 },
      },
      {
        it: 'string',
        props: { width: '550px' },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`FloatingHelper${describe ? '/' + describe : ''}`, module).add(
      it,
      () => (
        <Box paddingLeft="450px" paddingTop="150px">
          <FloatingHelper {...defaultProps} {...requiredProps} {...props} />
        </Box>
      ),
    );
  });
});
