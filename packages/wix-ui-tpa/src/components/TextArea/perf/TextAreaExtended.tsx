import * as React from 'react';
import { TextArea } from '../TextArea';
import { classes } from './TextAreaExtended.st.css';

export const TextAreaPerf = () => {
  return (
    <TextArea
      value={'Text'}
      ariaLabel={'Test'}
      className={classes.root}
      onChange={() => {}}
    />
  );
};
