import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';
import { StepperType, StepperFit, StepperStepType } from './index';

export interface StepperUniDriver extends BaseUniDriver {
  getType: () => Promise<StepperType>;
  getFit: () => Promise<StepperFit>;
  clickStep: (index: number) => Promise<void>;
  hoverStep: (index: number) => Promise<void>;
  getNumberOfSteps: () => Promise<number>;
  isStepActive: (index: number) => Promise<boolean>;
  getStepType: (index: number) => Promise<StepperStepType>;
  getStepText: (index: number) => Promise<string>;
}
