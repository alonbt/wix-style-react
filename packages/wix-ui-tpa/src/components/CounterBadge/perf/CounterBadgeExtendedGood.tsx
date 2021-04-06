import * as React from 'react';
import { CounterBadge } from '..';
import { classes } from './CounterBadgeExtendedGood.st.css';

export const CounterBadgePerf = () => {
  return <CounterBadge className={classes.root} value={20} />;
};
