import * as React from 'react';
import { IconToggle } from '../IconToggle';
import { ReactComponent as StarIcon } from '../../../assets/icons/Star.svg';
import { classes } from './IconToggleExtended.st.css';

export const IconTogglePerf = () => {
  return (
    <IconToggle
      checked
      icon={<StarIcon />}
      label={`Label`}
      onChange={() => {}}
      className={classes.root}
    />
  );
};
