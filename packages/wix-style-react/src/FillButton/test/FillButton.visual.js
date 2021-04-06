import React from 'react';
import { storiesOf } from '@storybook/react';
import FillButton from '../FillButton';
import Box from '../../Box';

const commonProps = {
  // use for repeated props across the tests (e.g. {buttonText: 'example'})
};

const tests = [
  {
    describe: 'sanity',
    its: [
      {
        it: 'default', // prop variation (e.g. small)
        props: {
          // the simulation (e.g. {size: "small"})
        },
      },
    ],
  },
  {
    describe: 'states',
    its: [
      {
        it: 'disabled', // prop variation (e.g. small)
        props: {
          disabled: true,
        },
      },
    ],
  },
  {
    describe: 'fill',
    its: [
      {
        it: 'gradient (contrast dark)', // prop variation (e.g. small)
        props: {
          fill: 'linear-gradient(#DBE6B3, #D7E6B3)',
        },
      },
      {
        it: 'gradient (contrast white)', // prop variation (e.g. small)
        props: {
          fill: 'linear-gradient(#4D4A19, #D7E6B3)',
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`FillButton${describe ? '/' + describe : ''}`, module).add(
      it,
      () => (
        <Box height="24px" padding="20px">
          <FillButton {...commonProps} {...props} />
        </Box>
      ),
    );
  });
});
