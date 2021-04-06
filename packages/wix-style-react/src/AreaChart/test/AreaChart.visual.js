import React from 'react';
import { storiesOf } from '@storybook/react';
import AreaChart from '../AreaChart';

const commonProps = {
  data: [
    {
      value: 5698,
      label: '12/9',
    },
    {
      value: 1170,
      label: '13/9',
    },
  ],
  tooltipContent: (item, index) => {
    return [`${item.label}`, `${item.value}$ from your orders`];
  },
};

const overMonthData = [
  {
    value: 5698,
    label: '1/9',
  },
  {
    value: 1170,
    label: '2/9',
  },
  {
    value: 4678,
    label: '3/9',
  },
  {
    value: 2030,
    label: '4/9',
  },
  {
    value: 3000,
    label: '5/9',
  },
  {
    value: 5698,
    label: '6/9',
  },
  {
    value: 1170,
    label: '7/9',
  },
  {
    value: 4678,
    label: '8/9',
  },
  {
    value: 2030,
    label: '9/9',
  },
  {
    value: 3000,
    label: '10/9',
  },
  {
    value: 5698,
    label: '11/9',
  },
  {
    value: 1170,
    label: '12/9',
  },
  {
    value: 4678,
    label: '13/9',
  },
  {
    value: 2030,
    label: '14/9',
  },
  {
    value: 3000,
    label: '15/9',
  },
  {
    value: 5698,
    label: '16/9',
  },
  {
    value: 1170,
    label: '17/9',
  },
  {
    value: 4678,
    label: '18/9',
  },
  {
    value: 2030,
    label: '19/9',
  },
  {
    value: 3000,
    label: '20/9',
  },
  {
    value: 5698,
    label: '21/9',
  },
  {
    value: 1170,
    label: '22/9',
  },
  {
    value: 4678,
    label: '23/9',
  },
  {
    value: 2030,
    label: '24/9',
  },
  {
    value: 3000,
    label: '25/9',
  },
  {
    value: 5698,
    label: '26/9',
  },
  {
    value: 1170,
    label: '27/9',
  },
  {
    value: 4678,
    label: '28/9',
  },
  {
    value: 2030,
    label: '29/9',
  },
  {
    value: 3000,
    label: '30/9',
  },
];

const overTwoMonthsData = [
  {
    value: 5698,
    label: '1/9',
  },
  {
    value: 1170,
    label: '2/9',
  },
  {
    value: 4678,
    label: '3/9',
  },
  {
    value: 2030,
    label: '4/9',
  },
  {
    value: 3000,
    label: '5/9',
  },
  {
    value: 5698,
    label: '6/9',
  },
  {
    value: 1170,
    label: '7/9',
  },
  {
    value: 4678,
    label: '8/9',
  },
  {
    value: 2030,
    label: '9/9',
  },
  {
    value: 3000,
    label: '10/9',
  },
  {
    value: 5698,
    label: '11/9',
  },
  {
    value: 1170,
    label: '12/9',
  },
  {
    value: 4678,
    label: '13/9',
  },
  {
    value: 2030,
    label: '14/9',
  },
  {
    value: 3000,
    label: '15/9',
  },
  {
    value: 5698,
    label: '16/9',
  },
  {
    value: 1170,
    label: '17/9',
  },
  {
    value: 4678,
    label: '18/9',
  },
  {
    value: 2030,
    label: '19/9',
  },
  {
    value: 3000,
    label: '20/9',
  },
  {
    value: 5698,
    label: '21/9',
  },
  {
    value: 1170,
    label: '22/9',
  },
  {
    value: 4678,
    label: '23/9',
  },
  {
    value: 2030,
    label: '24/9',
  },
  {
    value: 3000,
    label: '25/9',
  },
  {
    value: 5698,
    label: '26/9',
  },
  {
    value: 1170,
    label: '27/9',
  },
  {
    value: 4678,
    label: '28/9',
  },
  {
    value: 2030,
    label: '29/9',
  },
  {
    value: 3000,
    label: '30/9',
  },

  {
    value: 5698,
    label: '1/10',
  },
  {
    value: 1170,
    label: '2/10',
  },
  {
    value: 4678,
    label: '3/10',
  },
  {
    value: 2030,
    label: '4/10',
  },
  {
    value: 3000,
    label: '5/10',
  },
  {
    value: 5698,
    label: '6/10',
  },
  {
    value: 1170,
    label: '7/10',
  },
  {
    value: 4678,
    label: '8/10',
  },
  {
    value: 2030,
    label: '9/10',
  },
  {
    value: 3000,
    label: '10/10',
  },
  {
    value: 5698,
    label: '11/10',
  },
  {
    value: 1170,
    label: '12/10',
  },
  {
    value: 4678,
    label: '13/10',
  },
  {
    value: 2030,
    label: '14/10',
  },
  {
    value: 3000,
    label: '15/10',
  },
  {
    value: 5698,
    label: '16/10',
  },
  {
    value: 1170,
    label: '17/10',
  },
  {
    value: 4678,
    label: '18/10',
  },
  {
    value: 2030,
    label: '19/10',
  },
  {
    value: 3000,
    label: '20/10',
  },
  {
    value: 5698,
    label: '21/10',
  },
  {
    value: 1170,
    label: '22/10',
  },
  {
    value: 4678,
    label: '23/10',
  },
  {
    value: 2030,
    label: '24/10',
  },
  {
    value: 3000,
    label: '25/10',
  },
  {
    value: 5698,
    label: '26/10',
  },
  {
    value: 1170,
    label: '27/10',
  },
  {
    value: 4678,
    label: '28/10',
  },
  {
    value: 2030,
    label: '29/10',
  },
  {
    value: 3000,
    label: '30/10',
  },
  {
    value: 3000,
    label: '31/10',
  },
];

const overWeekData = [
  {
    value: 5698,
    label: '1/9',
  },
  {
    value: 1170,
    label: '2/9',
  },
  {
    value: 4678,
    label: '3/9',
  },
  {
    value: 2030,
    label: '4/9',
  },
  {
    value: 3000,
    label: '5/9',
  },
  {
    value: 3000,
    label: '6/9',
  },
  {
    value: 3000,
    label: '7/9',
  },
];

const nonCompactOnYAxisData = [
  {
    value: 1500,
    label: '12/9',
  },
  {
    value: 117,
    label: '13/9',
  },
  {
    value: 200,
    label: '14/9',
  },
  {
    value: 159,
    label: '15/9',
  },
  {
    value: 300,
    label: '16/9',
  },
];

const tests = [
  {
    describe: 'minimal data (2 data points)',
    its: [
      {
        it: 'default maxYTicksLimit',
        props: {},
      },
      {
        it: 'maxYTicksLimit: 10',
        props: {
          maxYTicksLimit: 10,
        },
      },
    ],
  },
  {
    describe: 'over week data (7 data points)',
    its: [
      {
        it: 'default maxYTicksLimit',
        props: {
          data: overWeekData,
        },
      },
      {
        it: 'maxYTicksLimit: 10',
        props: {
          data: overWeekData,
          maxYTicksLimit: 10,
        },
      },
    ],
  },
  {
    describe: 'over month data (30 data points)',
    its: [
      {
        it: 'default maxYTicksLimit',
        props: {
          ...commonProps,
          data: overMonthData,
        },
      },
      {
        it: 'maxYTicksLimit: 10',
        props: {
          data: overMonthData,
          maxYTicksLimit: 10,
        },
      },
    ],
  },
  {
    describe: 'over 2 months data (61 data points)',
    its: [
      {
        it: 'default maxYTicksLimit',
        props: {
          ...commonProps,
          data: overTwoMonthsData,
        },
      },
      {
        it: 'maxYTicksLimit: 10',
        props: {
          data: overTwoMonthsData,
          maxYTicksLimit: 10,
        },
      },
    ],
  },
  {
    describe: 'combining non-compact numbers on y axis',
    its: [
      {
        it: 'default maxYTicksLimit',
        props: {
          data: nonCompactOnYAxisData,
        },
      },
      {
        it: 'maxYTicksLimit: 10 ',
        props: {
          maxYTicksLimit: 10,
          data: nonCompactOnYAxisData,
        },
      },
    ],
  },
  {
    describe: 'no tooltips',
    its: [
      {
        it: 'default maxYTicksLimit',
        props: {
          ...commonProps,
          tooltipContent: null,
        },
      },
    ],
  },
];

// tests.forEach(({ describe, its }) => {
//   its.forEach(({ it, props }) => {
//     storiesOf(
//       `${AreaChart.displayName}${describe ? '/' + describe : ''}`,
//       module,
//     ).add(it, () => <AreaChart {...commonProps} {...props} />);
//   });
// });
