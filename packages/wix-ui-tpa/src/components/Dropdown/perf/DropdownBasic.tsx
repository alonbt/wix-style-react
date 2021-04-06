import * as React from 'react';
import { Dropdown } from '../Dropdown';

export const DropdownPerf = () => {
  return (
    <Dropdown
      options={[
        {
          id: '1',
          value: `Value`,
          isSelectable: true,
        },
      ]}
    />
  );
};
