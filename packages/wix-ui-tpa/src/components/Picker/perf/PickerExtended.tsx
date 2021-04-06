import * as React from 'react';
import { Picker } from '../';
import { classes } from './PickerExtended.st.css';

export const PickerPerf = () => {
  return (
    <Picker
      value="value"
      onPrev={() => {}}
      onNext={() => {}}
      className={classes.root}
    />
  );
};
