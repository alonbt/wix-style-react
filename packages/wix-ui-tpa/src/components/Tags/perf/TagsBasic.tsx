import * as React from 'react';
import { Tags } from '../';

export const TagsPerf = () => {
  return (
    <Tags
      items={[
        {
          title: 'Title',
          checked: true,
          value: 'Value',
        },
      ]}
      onClick={() => {}}
    />
  );
};
