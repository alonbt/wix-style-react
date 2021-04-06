import React from 'react';
import { storiesOf } from '@storybook/react';
import EditableSelector from '..';
import { TOGGLE_TYPE } from '../constants';

const types = Object.values(TOGGLE_TYPE);

const requiredProps = {
  options: [
    { title: 'title1', isSelected: true },
    { title: 'title2' },
    { title: 'title3' },
  ],
  title: 'editable selector title',
};

const tests = [
  {
    describe: 'basic',
    its: [
      {
        it: 'basic',
        props: {},
      },
    ],
  },
  {
    describe: 'newRowLabel',
    its: [
      {
        it: 'newRowLabel',
        props: { newRowLabel: 'New Row Label' },
      },
    ],
  },
  {
    describe: 'type',
    its: types.map(toggleType => ({ it: toggleType, props: { toggleType } })),
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(
      `EditableSelector${describe ? '/' + describe : ''}`,
      module,
    ).add(it, () => <EditableSelector {...requiredProps} {...props} />);
  });
});
