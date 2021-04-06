/* eslint-disable no-undef */
import React from 'react';
import { StatisticsWidget } from 'wix-style-react';

render(
  <div style={{ background: '#fff' }}>
    <StatisticsWidget
      items={[
        {
          value: '$500,000,000',
          valueInShort: '$500M',
          description: 'Income',
        },
        {
          value: '$1,500',
          valueInShort: '1,5K',
          description: 'Outcome',
        },
        {
          value: '4,200,000',
          valueInShort: '4,2M',
          description: 'Number of active customers',
          descriptionInfo: 'Customers have 10 and more order',
        },
      ]}
    />
  </div>,
);
