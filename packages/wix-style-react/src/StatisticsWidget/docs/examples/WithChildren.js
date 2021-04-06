/* eslint-disable no-undef */
import React from 'react';
import { StatisticsWidget } from 'wix-style-react';

render(
  <div style={{ background: '#fff' }}>
    <StatisticsWidget
      items={[
        {
          value: '$3,500',
          description: 'Revenue',
          children: <div>Additional info</div>,
        },
      ]}
    />
  </div>,
);
