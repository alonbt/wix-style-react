import React from 'react';
import { storiesOf } from '@storybook/react';
import FunnelChart from '../FunnelChart';

const commonProps = {
  data: [
    { value: 1000, label: 'visits', displayValue: '1K' },
    { value: 800, label: 'views' },
    { value: 400, label: 'cart' },
  ],
};

const tests = [
  {
    describe: 'sanity',
    its: [
      {
        it: '3 items',
        props: {
          data: commonProps.data,
        },
      },
      {
        it: '3 items no badges',
        props: {
          data: commonProps.data,
          hideDifferenceBadge: true,
        },
      },
      {
        it: 'last item value is zero',
        props: {
          data: [
            ...commonProps.data,
            { value: 0, label: 'checkout', displayValue: '-' },
          ],
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(
      `${FunnelChart.displayName}${describe ? '/' + describe : ''}`,
      module,
    ).add(it, () => <FunnelChart {...commonProps} {...props} />);
  });
});
