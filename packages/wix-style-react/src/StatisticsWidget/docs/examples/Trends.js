/* eslint-disable no-undef */
import React from 'react';
import { StatisticsWidget } from 'wix-style-react';

render(
  <div style={{ background: '#fff' }}>
    <StatisticsWidget
      items={[
        {
          value: '500',
          description: 'Visits',
          percentage: 21,
        },
        {
          value: '1,500',
          description: 'Orders',
          percentage: 0,
        },
        {
          value: '$2,500',
          percentage: -11,
        },
      ]}
    />
  </div>,
);
