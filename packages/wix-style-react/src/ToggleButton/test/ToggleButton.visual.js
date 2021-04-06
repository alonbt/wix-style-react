import React from 'react';
import CropRotate from 'wix-ui-icons-common/CropRotate';
import ToggleButton from '../ToggleButton';
import { storyOfAllPermutations } from '../../../test/utils/visual/utils';

const Story = props => (
  <ToggleButton {...props} labelValue="Crop & Rotate">
    <CropRotate />
  </ToggleButton>
);

const options = {
  props: ['selected', 'size', 'disabled', 'shape', 'border', 'labelPlacement'],
  skipUndefinedValue: true,
};

const optionsThemes = {
  props: ['selected', 'skin', 'border', 'shape', 'labelPlacement'],
  storyName: 'Props Permutations: skin',
  skipUndefinedValue: true,
};

storyOfAllPermutations(Story, ToggleButton, options);
storyOfAllPermutations(Story, ToggleButton, optionsThemes);
