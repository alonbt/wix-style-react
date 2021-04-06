import * as React from 'react';
import { CheckboxGroup } from '../index';
import { Checkbox } from '../../Checkbox';
import { classes } from './CheckboxGroupExtended.st.css';

export const CheckboxGroupPerf = () => {
  return (
    <CheckboxGroup label="Label" className={classes.root}>
      <Checkbox checked name="group1" onChange={() => {}} label={'label 1'} />
      <Checkbox name="group1" onChange={() => {}} label={'label 2'} />
    </CheckboxGroup>
  );
};
