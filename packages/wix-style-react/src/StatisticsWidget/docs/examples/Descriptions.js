/* eslint-disable no-undef */
import React from 'react';
import { StatisticsWidget } from 'wix-style-react';

render(
  <div style={{ background: '#fff' }}>
    <StatisticsWidget
      items={[
        {
          value: '$500',
          description: 'Sales',
        },
        {
          value: '$1,500',
        },
        {
          value: '$2,500',
          description: 'Revenue',
        },
      ]}
    />
  </div>,
);
