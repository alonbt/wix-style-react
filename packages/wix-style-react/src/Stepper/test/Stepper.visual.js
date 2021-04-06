import React, { useEffect } from 'react';
import { storiesOf } from '@storybook/react';
import { visualize, snap } from 'storybook-snapper';
import Stepper from '../Stepper';
import { Type, FitMode, StepType } from '../constants';
import { stepperTestkitFactory } from '../../../testkit';
import { storySettings } from './storySettings';

const { dataHook, storyName } = storySettings;
const onClick = () => {};

const createDriver = () =>
  stepperTestkitFactory({
    wrapper: document.body,
    dataHook,
  });

const hoverFirstStep = async done => {
  await createDriver().hoverStep(0);
  done();
};
const getTestNameByType = (type, name) => `type=${type}/${name}`;

const generateStepTypeTests = type => ({
  describe: getTestNameByType(type, 'step types'),
  its: [
    {
      it: 'disabled',
      props: {
        type,
        steps: [
          { text: 'This is a long step name' },
          { text: 'This is a long step name', type: StepType.Disabled },
          { text: 'This is a long step name', type: StepType.Disabled },
          { text: 'This is a long step name', type: StepType.Disabled },
          { text: 'This is a long step name', type: StepType.Disabled },
          { text: 'This is a long step name', type: StepType.Disabled },
          { text: 'This is a long step name', type: StepType.Disabled },
        ],
        activeStep: 0,
      },
    },
    {
      it: 'completed',
      props: {
        type,
        steps: [
          { text: 'This is a long step name', type: StepType.Completed },
          { text: 'This is a long step name', type: StepType.Completed },
          { text: 'This is a long step name', type: StepType.Completed },
          { text: 'This is a long step name', type: StepType.Completed },
          { text: 'This is a long step name', type: StepType.Completed },
          { text: 'This is a long step name', type: StepType.Completed },
          { text: 'This is a long step name' },
        ],
        activeStep: 6,
      },
    },
    {
      it: 'error',
      props: {
        type,
        steps: [
          { text: 'This is a long step name', type: StepType.Error },
          { text: 'This is a long step name', type: StepType.Error },
          { text: 'This is a long step name', type: StepType.Error },
          { text: 'This is a long step name', type: StepType.Error },
          { text: 'This is a long step name', type: StepType.Error },
          { text: 'This is a long step name', type: StepType.Error },
          { text: 'This is a long step name' },
        ],
        activeStep: 6,
      },
    },
    {
      it: 'error & active',
      props: {
        type,
        steps: [
          { text: 'This is a long step name', type: StepType.Error },
          { text: 'This is a long step name' },
          { text: 'This is a long step name' },
          { text: 'This is a long step name' },
          { text: 'This is a long step name' },
          { text: 'This is a long step name' },
          { text: 'This is a long step name' },
        ],
        activeStep: 0,
      },
    },
    {
      it: 'completed & active',
      props: {
        type,
        steps: [
          { text: 'This is a long step name', type: StepType.Completed },
          { text: 'This is a long step name' },
          { text: 'This is a long step name' },
          { text: 'This is a long step name' },
          { text: 'This is a long step name' },
          { text: 'This is a long step name' },
          { text: 'This is a long step name' },
        ],
        activeStep: 0,
      },
    },
  ],
});

const generateHoverTests = type => ({
  describe: getTestNameByType(type, 'hover'),
  its: [
    {
      it: 'normal',
      props: {
        type,
        steps: [{ text: 'step1' }, { text: 'step2' }, { text: 'step3' }],
        activeStep: 1,
        onClick,
      },
      componentDidMount: hoverFirstStep,
    },
    {
      it: 'disabled',
      props: {
        type,
        steps: [
          { text: 'step1', type: StepType.Disabled },
          { text: 'step2' },
          { text: 'step3' },
        ],
        activeStep: 1,
        onClick,
      },
      componentDidMount: hoverFirstStep,
    },
    {
      it: 'active',
      props: {
        type,
        steps: [{ text: 'step1' }, { text: 'step2' }, { text: 'step3' }],
        activeStep: 0,
        onClick,
      },
      componentDidMount: hoverFirstStep,
    },
    {
      it: 'error',
      props: {
        type,
        steps: [
          { text: 'step1', type: StepType.Error },
          { text: 'step2' },
          { text: 'step3' },
        ],
        activeStep: 1,
        onClick,
      },
      componentDidMount: hoverFirstStep,
    },
    {
      it: 'error & active',
      props: {
        type,
        steps: [
          { text: 'step1', type: StepType.Error },
          { text: 'step2' },
          { text: 'step3' },
        ],
        activeStep: 0,
        onClick,
      },
      componentDidMount: hoverFirstStep,
    },
    {
      it: 'completed',
      props: {
        type,
        steps: [
          { text: 'step1', type: StepType.Completed },
          { text: 'step2' },
          { text: 'step3' },
        ],
        activeStep: 1,
        onClick,
      },
      componentDidMount: hoverFirstStep,
    },
    {
      it: 'completed & active',
      props: {
        type,
        steps: [
          { text: 'step1', type: StepType.Completed },
          { text: 'step2' },
          { text: 'step3' },
        ],
        activeStep: 0,
        onClick,
      },
      componentDidMount: hoverFirstStep,
    },
  ],
});

const generateResponsiveTests = type => ({
  describe: getTestNameByType(type, 'responsive'),
  its: [
    {
      it: '4 steps',
      props: {
        type,
        steps: [
          { text: 'First step' },
          { text: 'Second step' },
          { text: 'Third step' },
          { text: 'Forth step' },
        ],
        activeStep: 1,
      },
    },
    {
      it: '7 steps',
      props: {
        type,
        steps: [
          { text: 'First step' },
          { text: 'Second step' },
          { text: 'Third step' },
          { text: 'Forth step' },
          { text: 'Fifth step' },
          { text: 'Six step' },
          { text: 'Seventh step' },
        ],
        activeStep: 1,
      },
    },
  ],
});

const generateFitModeTests = type => ({
  describe: getTestNameByType(type, 'fit'),
  its: [
    {
      it: 'stretched',
      props: {
        type,
        fit: FitMode.Stretched,
        steps: [
          { text: 'First step' },
          { text: 'Second step' },
          { text: 'Third step' },
          { text: 'Forth step' },
        ],
        activeStep: 0,
      },
    },
  ],
});

const tests = [
  generateStepTypeTests(Type.Circle),
  generateStepTypeTests(Type.Text),
  generateResponsiveTests(Type.Circle),
  generateResponsiveTests(Type.Text),
  generateFitModeTests(Type.Circle),
  generateFitModeTests(Type.Text),
];

const interactiveTests = [
  generateHoverTests(Type.Circle),
  generateHoverTests(Type.Text),
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`${storyName}${describe ? '/' + describe : ''}`, module).add(
      it,
      () => (
        <div
          style={{
            padding: 20,
            width: 966,
            border: '1px solid black',
          }}
        >
          <Stepper {...props} />
        </div>
      ),
    );
  });
});

const InteractiveStepperWrapper = ({ componentDidMount, done, ...props }) => {
  useEffect(() => {
    componentDidMount && componentDidMount(done);
  }, [componentDidMount, done]);

  return <Stepper {...props} />;
};

interactiveTests.forEach(({ describe, its }) => {
  its.forEach(({ it, props, componentDidMount }) => {
    visualize(`${storyName}/${describe}`, () => {
      snap(it, done => (
        <InteractiveStepperWrapper
          dataHook={dataHook}
          {...props}
          componentDidMount={componentDidMount}
          done={done}
        />
      ));
    });
  });
});
