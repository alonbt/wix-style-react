import * as React from 'react';
import { DatePickerInput } from '../';
import { classes } from './DatePickerInputExtended.st.css';

export const DatePickerInputPerf = () => {
  return (
    <DatePickerInput
      className={classes.root}
      value={new Date()}
      onChange={() => {}}
    />
  );
};
