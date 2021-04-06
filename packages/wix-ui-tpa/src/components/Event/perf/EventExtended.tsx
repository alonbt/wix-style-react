import * as React from 'react';
import { Event } from '../';
import { classes } from './EventExtended.st.css';

export const EventPerf = () => {
  return (
    <Event className={classes.root} time="20:30" title="Blink 182 Concert" />
  );
};
