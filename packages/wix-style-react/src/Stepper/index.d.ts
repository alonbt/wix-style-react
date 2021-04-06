import * as React from 'react';

export interface StepperProps {
  dataHook?: string;
  onClick?: (index: number) => void;
  activeStep: number;
  steps: StepperStep[];
  type?: StepperType;
  fit?: StepperFit;
}

export default class Stepper extends React.PureComponent<StepperProps> {}

export interface StepperStep {
  text: string;
  type?: StepperStepType;
}

export type StepperType = 'circle' | 'text';
export type StepperFit = 'compact' | 'stretched';
export type StepperStepType = 'completed' | 'disabled' | 'error' | 'normal';
