import React, { useState } from 'react';
import RadioGroup from '../RadioGroup';
import { storySettings } from './storySettings';
import { RTLWrapper } from '../../../stories/utils/RTLWrapper';

const RadioGroupTest = ({ defaultValue, ...props }) => {
  const [value, setValue] = useState(defaultValue);
  const onChange = newValue => setValue(newValue);

  return (
    <RTLWrapper>
      <RadioGroup
        dataHook={storySettings.dataHook}
        {...props}
        value={value}
        onChange={onChange}
      >
        {[1, 2, 3, 4].map(optionValue => (
          <RadioGroup.Radio key={optionValue} value={optionValue}>
            {`Option ${optionValue}`}
          </RadioGroup.Radio>
        ))}
      </RadioGroup>
    </RTLWrapper>
  );
};

export default RadioGroupTest;
