import React from 'react';
import PropTypes from 'prop-types';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';

import Stepper from '../Stepper';
import { Type, StepType, FitMode } from '../constants';
import { stepperPrivateDriverFactory } from './Stepper.private.uni.driver';

const steps7 = [
  { text: 'step 1' },
  { text: 'step 2' },
  { text: 'step 3' },
  { text: 'step 4' },
  { text: 'step 5' },
  { text: 'step 6' },
  { text: 'step 7' },
];

const createDriver = createUniDriverFactory(stepperPrivateDriverFactory);

describe('Stepper', () => {
  describe('Props validation', () => {
    let consoleErrorSpy;

    beforeEach(() => {
      consoleErrorSpy = jest
        .spyOn(global.console, 'error')
        .mockImplementation(jest.fn());
    });

    afterAll(() => {
      consoleErrorSpy.mockRestore();
      PropTypes.resetWarningCache();
    });

    it('should warn when a step does not contain text property', async () => {
      const steps = [{ type: 'completed' }, { text: 'step 2' }];
      createDriver(<Stepper activeStep={0} steps={steps} />);
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        expect.stringContaining(
          'Warning: Failed prop type: The prop `steps[0].text` is marked as required in `Stepper`, but its value is `undefined`.',
        ),
      );
    });

    it('should warn when steps length is less than 2', async () => {
      createDriver(<Stepper activeStep={0} steps={[{ text: 'step 1' }]} />);
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        expect.stringContaining(
          'Warning: Failed prop type: The prop `steps` in `Stepper` has to be an array with a length between 2 and 7.',
        ),
      );
    });

    it('should warn when steps length is greater than 7', async () => {
      const steps8 = [
        { text: 'step 1' },
        { text: 'step 2' },
        { text: 'step 3' },
        { text: 'step 4' },
        { text: 'step 5' },
        { text: 'step 6' },
        { text: 'step 7' },
        { text: 'step 8' },
      ];
      createDriver(<Stepper activeStep={1} steps={steps8} />);
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        expect.stringContaining(
          'Warning: Failed prop type: The prop `steps` in `Stepper` has to be an array with a length between 2 and 7.',
        ),
      );
    });

    it('should warn when active step has type disabled', async () => {
      const steps = [
        { text: 'step 1' },
        { text: 'step 2', type: 'disabled' },
        { text: 'step 3' },
      ];
      createDriver(<Stepper activeStep={1} steps={steps} />);
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        expect.stringContaining(
          'Warning: Failed prop type: Invalid prop `steps[1].type` of value `disabled` supplied to `Stepper`. Active step cannot be disabled, will use default `normal` type.',
        ),
      );
    });
  });

  describe('Click', () => {
    let onClick;
    beforeEach(() => {
      onClick = jest.fn();
    });

    it('should not trigger for an active step', async () => {
      const steps = [{ text: 'step' }, { text: 'step' }];
      const driver = createDriver(
        <Stepper onClick={onClick} steps={steps} activeStep={0} />,
      );

      await driver.clickStep(0);
      expect(onClick).not.toBeCalled();
    });

    it('should not trigger for a disabled step', async () => {
      const steps = [
        { text: 'active step' },
        { text: 'disabled step', type: StepType.Disabled },
      ];
      const driver = createDriver(
        <Stepper onClick={onClick} steps={steps} activeStep={0} />,
      );

      await driver.clickStep(1);
      expect(onClick).not.toBeCalled();
    });

    it('should trigger for a completed step', async () => {
      const steps = [
        { text: 'step', type: StepType.Completed },
        { text: 'step' },
      ];
      const driver = createDriver(
        <Stepper onClick={onClick} steps={steps} activeStep={1} />,
      );

      await driver.clickStep(0);
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('should trigger for a normal step', async () => {
      const steps = [{ text: 'step' }, { text: 'step' }];
      const driver = createDriver(
        <Stepper onClick={onClick} steps={steps} activeStep={0} />,
      );

      await driver.clickStep(1);
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('should trigger for an error step', async () => {
      const steps = [{ text: 'step' }, { text: 'step', type: StepType.Error }];
      const driver = createDriver(
        <Stepper onClick={onClick} steps={steps} activeStep={0} />,
      );

      await driver.clickStep(1);
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Render', () => {
    it('should render all given steps', async () => {
      const driver = createDriver(<Stepper steps={steps7} activeStep={1} />);

      expect(await driver.getNumberOfSteps()).toBe(steps7.length);
      for (let i = 0; i < steps7.length; i++) {
        expect(await driver.getStepText(i)).toBe(`step ${i + 1}`);
      }
    });

    it('should render exactly one active step', async () => {
      const driver = createDriver(<Stepper steps={steps7} activeStep={1} />);

      for (let i = 0; i < steps7.length; i++) {
        if (i === 1) {
          expect(await driver.isStepActive(i)).toBe(true);
        } else {
          expect(await driver.isStepActive(i)).toBe(false);
        }
      }
    });

    it('should render normal, completed, error and disabled step types', async () => {
      const allKindOfSteps = [
        { text: 'normal step' },
        { text: 'disabled step', type: StepType.Disabled },
        { text: 'completed step', type: StepType.Completed },
        { text: 'error step', type: StepType.Error },
      ];
      const driver = createDriver(
        <Stepper steps={allKindOfSteps} activeStep={0} />,
      );

      expect(await driver.getStepType(0)).toBe(StepType.Normal);
      expect(await driver.getStepType(1)).toBe(StepType.Disabled);
      expect(await driver.getStepType(2)).toBe(StepType.Completed);
      expect(await driver.getStepType(3)).toBe(StepType.Error);
    });
  });

  describe('Style type', () => {
    it('should have "circle" type by default', async () => {
      const driver = createDriver(<Stepper steps={steps7} activeStep={0} />);
      expect(await driver.getType()).toBe(Type.Circle);
    });

    it('should render "text" type', async () => {
      const driver = createDriver(
        <Stepper steps={steps7} activeStep={0} type={Type.Text} />,
      );
      expect(await driver.getType()).toBe(Type.Text);
    });
  });

  describe('Fit mode', () => {
    it('should have "compact" mode by default', async () => {
      const driver = createDriver(<Stepper steps={steps7} activeStep={0} />);
      expect(await driver.getFit()).toBe(FitMode.Compact);
    });

    it('should render in "stretched" mode', async () => {
      const driver = createDriver(
        <Stepper steps={steps7} activeStep={0} fit={FitMode.Stretched} />,
      );
      expect(await driver.getFit()).toBe(FitMode.Stretched);
    });
  });
});
