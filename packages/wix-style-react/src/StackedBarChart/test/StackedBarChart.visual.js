import React from 'react';
import { storiesOf } from '@storybook/react';
import StackedBarChart from '../StackedBarChart';

const tests = [
  {
    describe: 'sanity',
    its: [
      {
        it: '3 bars',
        props: {
          data: [
            { label: 'one', values: [1, 1] },
            { label: 'two', values: [2, 0] },
            { label: 'three', values: [0, 2] },
          ],
        },
      },
      {
        it: '12 bars',
        props: {
          data: [
            { label: 'Jan 20', values: [500, 200] },
            { label: 'Feb 20', values: [200, 700] },
            { label: 'Mar 20', values: [0, 400] },
            { label: 'Apr 20', values: [900, 100] },
            { label: 'Mai 20', values: [300, 300] },
            { label: 'Jun 20', values: [400, 300] },
            { label: 'Jul 20', values: [100, 100] },
            { label: 'Aug 20', values: [0, 0] },
            { label: 'Sep 20', values: [800, 0] },
            { label: 'Oct 20', values: [600, 300] },
            { label: 'Nov 20', values: [200, 300] },
            { label: 'Dec 20', values: [300, 200] },
          ],
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(
      `${StackedBarChart.displayName}${describe ? '/' + describe : ''}`,
      module,
    ).add(it, () => <StackedBarChart {...props} />);
  });
});
