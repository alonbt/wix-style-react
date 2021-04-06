import React from 'react';
import NumberInput from '../NumberInput';
import Input from '../../Input';
import Box from '../../Box';
import { storyOfAllPermutations } from '../../../test/utils/visual/utils';

const defaultProps = {
  value: '12345',
};

const Story = props => (
  <Box height={54}>
    {[undefined, 'error', 'warning', 'loading'].map(status => (
      <Box width={200} direction="vertical" margin={1}>
        <NumberInput {...defaultProps} {...props} status={status} />
      </Box>
    ))}
  </Box>
);

const options = {
  props: [
    'size',
    'disabled',
    'readOnly',
    { name: 'prefix', values: [undefined, <Input.Affix>#</Input.Affix>] },
    { name: 'suffix', values: [undefined, <Input.Affix>#</Input.Affix>] },
    'hideStepper',
  ],
  skipUndefinedValue: true,
};

storyOfAllPermutations(Story, NumberInput, options);
