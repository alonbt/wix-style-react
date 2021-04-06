import React from 'react';
import { storiesOf } from '@storybook/react';

import EditableTitle from '../EditableTitle';

const tests = [
  {
    describe: 'values',
    its: [
      {
        it: 'Initial Value',
        props: {
          initialValue: 'Initial Value',
        },
      },
      {
        it: 'Default value',
        props: {
          defaultValue: 'default value',
        },
      },
      {
        it: 'Default value & Initial value',
        props: {
          defaultValue: 'default value',
          initialValue: 'Initial Value',
        },
      },
    ],
  },
  {
    describe: 'ellipsis',
    its: [
      {
        it: 'Initial Value',
        props: {
          initialValue:
            'Some Title Some Title Some Title Some Title Some Title Some Title',
        },
      },
      {
        it: 'Default value',
        props: {
          defaultValue:
            'Some Title Some Title Some Title Some Title Some Title Some Title',
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`EditableTitle${describe ? '/' + describe : ''}`, module).add(
      it,
      () => (
        <div style={{ width: '300px' }}>
          <EditableTitle {...props} />
        </div>
      ),
    );
  });
});
