import React from 'react';
import { storiesOf } from '@storybook/react';
import ComposerSidebar from '../ComposerSidebar';
import { items, disabledItems } from '../docs/examples';

const commonProps = {
  items,
  selectedId: 1,
};

const tests = [
  {
    describe: 'size',
    its: [
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
  {
    describe: 'labelPlacement',
    its: [
      {
        it: 'end',
        props: {
          labelPlacement: 'end',
        },
      },
      {
        it: 'bottom',
        props: {
          labelPlacement: 'bottom',
        },
      },
    ],
  },
  {
    describe: 'disabled',
    its: [
      {
        it: 'true',
        props: {
          items: disabledItems,
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(
      `${ComposerSidebar.displayName}${describe ? '/' + describe : ''}`,
      module,
    ).add(it, () => <ComposerSidebar {...commonProps} {...props} />);
  });
});
