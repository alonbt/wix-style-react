import React from 'react';
import { storiesOf } from '@storybook/react';

import MainExample from './MainExample';

const tests = [
  {
    describe: 'TableToolbar',
    its: [
      {
        it: 'should display table toolbar',
        component: () => <MainExample />,
      },

      {
        it: 'should display table toolbar in RTL',
        component: () => (
          <div className="rtl" dir="rtl">
            <MainExample />
          </div>
        ),
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, component }) => {
    storiesOf(`TableToolbar${describe ? '/' + describe : ''}`, module).add(
      it,
      component,
    );
  });
});
