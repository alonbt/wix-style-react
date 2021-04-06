import * as React from 'react';
import { TextButton } from '../TextButton';
import { classes } from './TextButtonExtended.st.css';

export const TextButtonPerf = () => (
  <TextButton className={classes.root}>Text</TextButton>
);
