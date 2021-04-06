import * as React from 'react';
import { RadioButtonGroup } from '../';
import { RadioButton } from '../../RadioButton';

export const RadioButtonGroupPerf = () => {
  return (
    <RadioButtonGroup onChange={() => {}} name="Name" value={'1'}>
      <RadioButton label={'option'} value={'1'} />
    </RadioButtonGroup>
  );
};
