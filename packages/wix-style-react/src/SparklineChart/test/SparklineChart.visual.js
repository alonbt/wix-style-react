import React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
import SparklineChart from '../SparklineChart';

const commonProps = {
  data: [
    { label: new Date('Thu Sep 4 2020'), value: 3 },
    { label: new Date('Thu Sep 5 2020'), value: 17 },
    { label: new Date('Thu Sep 6 2020'), value: 18 },
    { label: new Date('Thu Sep 7 2020'), value: 12 },
    { label: new Date('Thu Sep 8 2020'), value: 8 },
    { label: new Date('Thu Sep 9 2020'), value: 7 },
    { label: new Date('Thu Sep 10 2020'), value: 9 },
  ],
};

const tests = [
  {
    describe: 'sanity',
    its: [
      {
        it: 'default',
        props: {},
      },
      {
        it: 'custom color',
        props: {
          color: '#d63429',
        },
      },
      {
        it: 'partial highlighted area',
        props: {
          highlightedStartingIndex: 3,
        },
      },
      {
        it: 'custom sizes',
        props: {
          width: 400,
          height: 80,
        },
      },
    ],
  },
];

visualize(SparklineChart.displayName, () => {
  tests.forEach(({ describe, its }) => {
    story(describe, () => {
      its.map(({ it, props }) =>
        snap(it, () => (
          <SparklineChart {...commonProps} {...props} animationDuration={0} />
        )),
      );
    });
  });
});
