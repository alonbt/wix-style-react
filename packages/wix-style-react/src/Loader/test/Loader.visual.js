import React from 'react';
import Loader from '../Loader';
import { storyOfAllPermutations } from '../../../test/utils/visual/utils';
import Box from '../../Box';

const Story = props => (
  <Box>
    <Loader {...props} />
    <Box marginLeft={1} backgroundColor="#eee">
      <Loader {...props} color="white" />
    </Box>
  </Box>
);

export const runTests = (
  { themeName, testWithTheme } = { testWithTheme: i => i },
) => {
  const options = {
    testWithTheme,
    themeName,
    props: [
      'size',
      'status',
      { name: 'text', values: ['Wubba Lubba Dub Dub'] },
    ],
    skipUndefinedValue: true,
  };

  storyOfAllPermutations(Story, Loader, options);
};
