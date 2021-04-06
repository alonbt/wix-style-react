/* eslint-disable no-undef */
import React from 'react';
import { StatisticsWidget } from 'wix-style-react';

render(
  <div style={{ background: '#fff' }}>
    <StatisticsWidget
      items={[
        {
          description: 'Sales',
        },
        {
          description: 'Views',
        },
        {
          description: 'Revenue',
        },
      ]}
    />
  </div>,
);
