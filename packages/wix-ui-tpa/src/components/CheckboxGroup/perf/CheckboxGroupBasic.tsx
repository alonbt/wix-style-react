import * as React from 'react';
import { CheckboxGroup } from '../index';
import { Checkbox } from '../../Checkbox';

export const CheckboxGroupPerf = () => {
  return (
    <CheckboxGroup label="Label">
      <Checkbox checked name="group1" onChange={() => {}} label={'label 1'} />
      <Checkbox name="group1" onChange={() => {}} label={'label 2'} />
    </CheckboxGroup>
  );
};
