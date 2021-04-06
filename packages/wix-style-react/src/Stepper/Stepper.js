import React from 'react';
import PropTypes from 'prop-types';

import Step from './components/Step';
import { StepType } from './constants';
import { validateStepsPropType } from './utils';
import { st, classes } from './Stepper.st.css';

/** Stepper */
class Stepper extends React.PureComponent {
  static displayName = 'Stepper';

  static propTypes = {
    /** Hook for testing purposes. */
    dataHook: PropTypes.string,

    /** Event triggered on step click: `onClick(stepIndex)` */
    onClick: PropTypes.func,

    /** Index of the active step. */
    activeStep: PropTypes.number.isRequired,

    /**
     * An array of steps, where each step is an object with the following properties:
     * - `text` - step title text (required).
     * - `type` - step type (`completed`, `disabled`, `error` or default `normal`).
     */
    steps: validateStepsPropType,

    /** Style type. */
    type: PropTypes.oneOf(['circle', 'text']),

    /**
     * Fit mode for steps. In `stretched` mode the component will grow to fill parent
     * container width.
     */
    fit: PropTypes.oneOf(['compact', 'stretched']),
  };

  static defaultProps = {
    steps: [],
    type: 'circle',
    fit: 'compact',
  };

  _getActiveStepType = () => {
    const { activeStep, steps } = this.props;
    const step = steps[activeStep];

    return step.type !== StepType.Disabled ? step.type : undefined;
  };

  render() {
    const { dataHook, steps, type, fit, activeStep, onClick } = this.props;

    return (
      <div
        className={st(classes.root, { fit })}
        data-hook={dataHook}
        data-type={type}
        data-fit={fit}
      >
        {steps.map((step, index) => {
          const isLastStep = index === steps.length - 1;
          const isActiveStep = index === activeStep;

          return (
            <Step
              {...step}
              key={index}
              number={index + 1}
              active={isActiveStep}
              last={isLastStep}
              type={isActiveStep ? this._getActiveStepType() : step.type}
              styleType={type}
              onClick={onClick && (() => onClick(index))}
            />
          );
        })}
      </div>
    );
  }
}

export default Stepper;
