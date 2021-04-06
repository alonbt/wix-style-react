import React from 'react';
import { storiesOf } from '@storybook/react';
import TagList from '../TagList';

const commonProps = {
  tags: [
    {
      id: '1',
      children: 'Tag',
    },
  ],
};

const tests = [
  {
    describe: 'sanity', // prop name (e.g. size)
    its: [
      {
        it: 'default', // prop variation (e.g. small)
      },
    ],
  },
  {
    describe: 'actionButton',
    its: [
      {
        it: 'none',
        props: {
          actionButton: null,
        },
      },
      {
        it: 'with label',
        props: {
          actionButton: {
            label: 'action button',
          },
        },
      },
    ],
  },
  {
    describe: 'size',
    its: [
      {
        it: 'none',
        props: {
          size: null,
        },
      },
      {
        it: 'small',
        props: {
          size: 'small',
        },
      },
      {
        it: 'medium',
        props: {
          size: 'medium',
        },
      },
      {
        it: 'large',
        props: {
          size: 'large',
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(
      `${TagList.displayName}${describe ? '/' + describe : ''}`,
      module,
    ).add(it, () => <TagList {...commonProps} {...props} />);
  });
});
