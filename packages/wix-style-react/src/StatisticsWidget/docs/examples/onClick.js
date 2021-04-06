/* eslint-disable no-undef */ /* eslint-disable no-console */
import React from 'react';
import { StatisticsWidget } from 'wix-style-react';

render(
  <div style={{ background: '#fff' }}>
    <StatisticsWidget
      items={[
        {
          value: '500',
          description: 'Bookings',
          percentage: 21,
          onClick: () => console.log('Hello from 1st'),
        },
        {
          value: '1,500',
          description: 'Visits',
          percentage: 21,
          invertedPercentage: true,
        },
        {
          value: '3.9',
          percentage: -11,
        },
        {
          value: '$3,500',
          description: 'Revenue',
          percentage: -11,
          invertedPercentage: true,
          descriptionInfo: 'Sales on Thursday',
          onClick: () => console.log('Hello from 4th'),
        },
        {
          value: '0',
          description: 'Clicks',
          percentage: 0,
          invertedPercentage: true,
          descriptionInfo: 'Clicks on Friday',
          onClick: () => console.log('Hello from 5th'),
        },
      ]}
    />
  </div>,
);
