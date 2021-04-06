import * as React from 'react';
import { Checkbox } from '../index';
import { classes } from './CheckboxExtended.st.css';

export const CheckboxPerf = () => {
  return (
    <Checkbox
      checked
      onChange={() => {}}
      label={'label'}
      className={classes.root}
    />
  );
};
