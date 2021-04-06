import * as React from 'react';
import { ProgressBar } from '../';
import { classes } from './ProgressBarExtended.st.css';

export const ProgressBarPerf = () => {
  return (
    <ProgressBar className={classes.root} value={33} showProgressIndication />
  );
};
