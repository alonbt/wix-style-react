import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

import { textUniDriverFactory } from '../Text/Text.uni.driver';
import { DataHook } from './constants';

export const stepperDriverFactory = base => {
  const byHook = dataHook => `[data-hook="${dataHook}"]`;
  const steps = base.$$(byHook(DataHook.Step));

  return {
    ...baseUniDriverFactory(base),

    /** Returns the style type. */
    getType: async () => base.attr('data-type'),

    /** Returns the fit mode. */
    getFit: async () => base.attr('data-fit'),

    /** Click step at index. */
    clickStep: async index => {
      await steps.get(index).click();
    },

    /** Hover step at index. */
    hoverStep: async index => {
      await steps.get(index).hover();
    },

    /** Returns the number of rendered steps. */
    getNumberOfSteps: async () => steps.count(),

    /** Returns whether the step at index is active or not. */
    isStepActive: async index =>
      (await steps.get(index).attr('data-active')) === 'true',

    /** Returns the type of step at index. */
    getStepType: async index => steps.get(index).attr('data-type'),

    /** Returns the text content of step at index. */
    getStepText: async index => {
      const textDriver = textUniDriverFactory(
        steps.get(index).$(byHook(DataHook.StepText)),
      );
      return textDriver.getText();
    },
  };
};
