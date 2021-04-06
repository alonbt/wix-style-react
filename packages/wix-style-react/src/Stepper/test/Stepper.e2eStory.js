import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import Stepper from '..';
import { StepType } from '../constants';
import { getTestStoryKind } from '../../../stories/storiesHierarchy';
import { storySettings } from './storySettings';

const StepperWithState = () => {
  const [activeStep, setActiveStep] = useState(0);
  return (
    <Stepper
      dataHook={storySettings.dataHook}
      activeStep={activeStep}
      steps={[
        { text: 'First step', type: StepType.Completed },
        { text: 'Second step', type: StepType.Disabled },
        { text: 'Third step' },
        { text: 'Fourth step', type: StepType.Error },
      ]}
      onClick={index => setActiveStep(index)}
    />
  );
};

const kind = getTestStoryKind(storySettings);

storiesOf(kind, module).add(storySettings.testStoryNames.ACCESSIBILITY, () => (
  <StepperWithState />
));

const steps7 = [
  { text: 'This is a long step name', type: StepType.Completed },
  { text: 'This is a long step name' },
  { text: 'This is a long step name', type: StepType.Error },
  { text: 'This is a long step name' },
  { text: 'This is a long step name', type: StepType.Error },
  { text: 'This is a long step name' },
  { text: 'This is a long step name', type: StepType.Disabled },
];

storiesOf(kind, module).add(storySettings.testStoryNames.WINDOW_RESIZE, () => (
  <Stepper steps={steps7} activeStep={2} dataHook={storySettings.dataHook} />
));
