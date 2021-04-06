import React from 'react';
import ToggleSwitch from '../ToggleSwitch';
import Box from '../../Box';
import { storyOfAllPermutations } from '../../../test/utils/visual/utils';

const Story = props => (
  <Box>
    <ToggleSwitch {...props} />
    <Box marginLeft={1}>
      <ToggleSwitch {...props} checked />
    </Box>
  </Box>
);

const options = {
  props: ['size', 'disabled', 'skin'],
  skipUndefinedValue: true,
};

storyOfAllPermutations(Story, ToggleSwitch, options);
