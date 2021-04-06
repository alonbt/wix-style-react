import React from 'react';
import CounterBadge from '../CounterBadge';
import HeartFilled from 'wix-ui-icons-common/HeartFilled';
import { storyOfAllPermutations } from '../../../test/utils/visual/utils';
import Box from '../../Box';

const options = {
  props: [
    {
      name: 'children',
      values: [undefined, 0, 33, 1000, 'Hello World', <HeartFilled />],
    },
    'size',
    'showShadow',
  ],
  skipUndefinedValue: true,
};

const skins = [
  'general',
  'standard',
  'neutralStandard',
  'danger',
  'warning',
  'urgent',
  'success',
  'light',
];

const Story = props => (
  <Box margin={1}>
    {skins.map(skin => (
      <Box margin={1} maxWidth={100} key={skin}>
        <CounterBadge {...props} skin={skin} />
      </Box>
    ))}
  </Box>
);

storyOfAllPermutations(Story, CounterBadge, options);
