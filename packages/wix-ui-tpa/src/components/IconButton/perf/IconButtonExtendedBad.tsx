import * as React from 'react';
import { ReactComponent as ShareIcon } from '../../../assets/icons/Share.svg';
import { IconButton } from '../IconButton';
import { classes } from './IconButtonExtendedBad.st.css';

export const IconButtonPerf = () => (
  <IconButton icon={<ShareIcon />} className={classes.root} />
);
