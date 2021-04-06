import React from 'react';
import Box from '../../Box';
import Palette from '../Palette';
import { storyOfAllPermutations } from '../../../test/utils/visual/utils';

const Story = props => (
  <Box width={'100px'} height={'40px'}>
    <Palette {...props} />
  </Box>
);

const options = {
  props: [
    {
      name: 'fill',
      values: [
        [],
        ['black', 'red', 'yellow', 'transparent', null],
        [
          'rgb(229, 150, 111)',
          'rgb(252, 225, 207)',
          'rgb(254, 194, 130)',
          'rgb(255, 238, 230)',
        ],
        ['#50808E', '#69A297', '#84B59F', '#A3C9A8'],
        [
          'linear-gradient(to right top, #d24113, #e06e01, #e99800, #edc01c, #ece743)',
          'linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)',
          'linear-gradient(to right top, #0b0b0b, #40393d, #7d6a69, #b7a393, #e5e4c5)',
          'linear-gradient(to right top, #8c6a9d, #a28db5, #bcb0cd, #d8d3e2, #f7f7f7)',
        ],
      ],
    },
  ],
  skipUndefinedValue: true,
};

storyOfAllPermutations(Story, Palette, options);
