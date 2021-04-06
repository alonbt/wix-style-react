import React from 'react';
import CheckToggle from '../CheckToggle';
import { storyOfAllPermutations } from '../../../test/utils/visual/utils';

const Story = props => <CheckToggle {...props} />;

const options = {
  props: ['checked', 'size', 'skin', 'disabled'],
  skipUndefinedValue: true,
};

storyOfAllPermutations(Story, CheckToggle, options);
