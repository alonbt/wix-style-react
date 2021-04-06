/* eslint-disable no-undef */
import React from 'react';
import { StatisticsWidget } from 'wix-style-react';

render(
  <div style={{ background: '#fff' }}>
    <StatisticsWidget
      items={[
        {
          value: '500',
          description: 'Customers',
          percentage: 21,
        },
        {
          value: '1,500',
          description: 'Orders',
          percentage: 21,
          invertedPercentage: true,
        },
        {
          value: '$2,500',
          description: 'Outcome',
          percentage: -11,
        },
        {
          value: '$3,500',
          description: 'Revenue',
          percentage: -11,
          invertedPercentage: true,
          descriptionInfo: 'Sales on Thursday',
        },
        {
          value: '0',
          description: 'Clicks',
          percentage: 0,
          invertedPercentage: true,
          descriptionInfo: 'Clicks on Friday',
        },
      ]}
    />
  </div>,
);
