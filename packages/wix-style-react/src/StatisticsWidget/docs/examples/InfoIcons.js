/* eslint-disable no-undef */
import React from 'react';
import { StatisticsWidget } from 'wix-style-react';

render(
  <div style={{ background: '#fff' }}>
    <StatisticsWidget
      items={[
        {
          value: '$500',
          description: 'Revenue',
          descriptionInfo: 'Revenue from sales',
        },
        {
          value: '$1,500',
          descriptionInfo: 'I am not visible because there is no description',
        },
        {
          value: '2,500',
          description: 'Orders',
          descriptionInfo: 'Orders made this week',
        },
      ]}
    />
  </div>,
);
