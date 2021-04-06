/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import AnalyticsSummaryCard from '../AnalyticsSummaryCard';
import Refresh from 'wix-ui-icons-common/Refresh';

import IconButton from '../../IconButton';

const chartData = [
  { label: new Date('Thu Sep 4 2020'), value: 3 },
  { label: new Date('Thu Sep 5 2020'), value: 17 },
  { label: new Date('Thu Sep 6 2020'), value: 18 },
];

const commonProps = {
  title: 'Sessions',
  titleTooltip: 'tooltip',
  value: '1,9K',
  valueTooltip: '1,943',
  trend: 12,
  isTrendVisible: false,
  invertedTrend: false,
  isLoading: false,
  ctaButton: (
    <IconButton size="tiny">
      <Refresh />
    </IconButton>
  ),
  onCTAClick: () => console.log('refresh click'),
  onClick: () => console.log('general click'),
  onChartHover: () => console.log('on chart hover'),
  chartWidth: 169,
  chartData,
  chartColorHex: '#3899ec',
  footer: <div> This is footer</div>,
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
        it: 'should show trend',
        props: {
          isTrendVisible: true,
        },
      },
      {
        it: 'should show loader',
        props: {
          isLoading: true,
        },
      },
      {
        it: 'should have title Sales and value 6K',
        props: {
          title: 'Sales',
          value: '6K',
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(
      `${AnalyticsSummaryCard.displayName}${describe ? '/' + describe : ''}`,
      module,
    ).add(it, () => <AnalyticsSummaryCard {...commonProps} {...props} />);
  });
});
