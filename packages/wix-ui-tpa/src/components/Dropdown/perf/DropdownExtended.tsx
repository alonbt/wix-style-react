import * as React from 'react';
import { Dropdown } from '../Dropdown';
import { classes } from './DropdownExtended.st.css';

export const DropdownPerf = () => {
  return (
    <Dropdown
      className={classes.root}
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
