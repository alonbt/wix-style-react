import * as React from 'react';
import { RadioButtonGroup } from '../';
import { RadioButton } from '../../RadioButton';
import { classes } from './RadioButtonGroupExtended.st.css';

export const RadioButtonGroupPerf = () => {
  return (
    <RadioButtonGroup
      className={classes.root}
      onChange={() => {}}
      name="Name"
      value={'1'}
    >
      <RadioButton label={'option'} value={'1'} />
    </RadioButtonGroup>
  );
};
