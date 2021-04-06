/* eslint-disable no-undef */
import React from 'react';
import { StatisticsWidget } from 'wix-style-react';

render(
  <div style={{ background: '#fff' }}>
    <StatisticsWidget
      alignItems="start"
      items={[
        {
          value: '$1,700',
          description: 'Sales',
        },
        {
          value: '12,000',
          description: 'Views',
        },
        {
          value: '$9,300',
          description: 'Revenue',
        },
      ]}
    />
  </div>,
);
