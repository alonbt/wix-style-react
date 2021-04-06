import * as React from 'react';
import { DotNavigation } from '../DotNavigation';
import { classes } from './DotNavigationExtended.st.css';

export const DotNavigationPerf = () => {
  return (
    <DotNavigation
      currentIndex={0}
      onSelect={() => {}}
      className={classes.root}
    />
  );
};
