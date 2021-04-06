import React from 'react';
import SocialButton from '../SocialButton';
import { icons } from '../constants';
import Box from '../../Box';
import { storyOfAllPermutations } from '../../../test/utils/visual/utils';

const options = {
  props: [
    'disabled',
    { name: 'text', values: [undefined, 'Share me please!'] },
  ],
  skipUndefinedValue: true,
};

const Story = props => (
  <Box margin={1}>
    {icons.map(icon => (
      <Box margin={1} maxWidth={100}>
        <SocialButton {...props} icon={icon} />
      </Box>
    ))}
  </Box>
);

storyOfAllPermutations(Story, SocialButton, options);
