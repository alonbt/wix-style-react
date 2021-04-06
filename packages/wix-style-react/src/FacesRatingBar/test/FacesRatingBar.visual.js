import React from 'react';
import { storiesOf } from '@storybook/react';
import FacesRatingBar from '../FacesRatingBar';

const commonProps = {};

const tests = [
  {
    describe: 'interactive',
    its: [
      {
        it: 'none',
        props: {
          value: 0,
        },
      },
      {
        it: 'disapointed',
        props: {
          value: 1,
        },
      },
      {
        it: 'frowning',
        props: {
          value: 2,
        },
      },
      {
        it: 'neutral',
        props: {
          value: 3,
        },
      },
      {
        it: 'smiling',
        props: {
          value: 4,
        },
      },
      {
        it: 'grining',
        props: {
          value: 5,
        },
      },
    ],
  },
  {
    describe: 'read only',
    its: [
      {
        it: 'disapointed',
        props: {
          value: 1,
          readOnly: true,
        },
      },
      {
        it: 'frowning',
        props: {
          value: 2,
          readOnly: true,
        },
      },
      {
        it: 'neutral',
        props: {
          value: 3,
          readOnly: true,
        },
      },
      {
        it: 'smiling',
        props: {
          value: 4,
          readOnly: true,
        },
      },
      {
        it: 'grining',
        props: {
          value: 5,
          readOnly: true,
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(
      `${FacesRatingBar.displayName}${describe ? '/' + describe : ''}`,
      module,
    ).add(it, () => <FacesRatingBar {...commonProps} {...props} />);
  });
});
