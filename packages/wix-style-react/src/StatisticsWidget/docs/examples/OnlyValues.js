/* eslint-disable no-undef */
import React from 'react';
import { StatisticsWidget } from 'wix-style-react';

render(
  <div style={{ background: '#fff' }}>
    <StatisticsWidget
      items={[
        {
          value: '$500',
        },
        {
          value: '$1,500',
        },
        {
          value: '$2,500',
        },
        {
          value: '$3,500',
        },
      ]}
    />
  </div>,
);
