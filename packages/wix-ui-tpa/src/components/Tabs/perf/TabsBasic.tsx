import * as React from 'react';
import { Tabs } from '../Tabs';

export const TabsPerf = () => {
  return (
    <Tabs
      items={[{ title: 'Title 1', id: 'tab-1' }]}
      activeTabIndex={0}
      onTabClick={() => {}}
    />
  );
};
