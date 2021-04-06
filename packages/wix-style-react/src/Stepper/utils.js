import PropTypes from 'prop-types';
import { StepType, MAX_STEPS, MIN_STEPS } from './constants';

export const validateStepsPropType = (
  props,
  propName,
  componentName,
  location,
) => {
  const steps = props[propName];
  const { activeStep } = props;

  if (Array.isArray(steps)) {
    if (steps.length < MIN_STEPS || steps.length > MAX_STEPS) {
      return new Error(
        `The prop \`${propName}\` in \`${componentName}\` has to be an array with a length between ${MIN_STEPS} and ${MAX_STEPS}.`,
      );
    }

    if (
      typeof activeStep === 'number' &&
      steps[activeStep].type === StepType.Disabled
    ) {
      return new Error(
        `Invalid prop \`${propName}[${activeStep}].type\` of value \`${steps[activeStep].type}\` supplied to \`${componentName}\`. Active step cannot be disabled, will use default \`${StepType.Normal}\` type.`,
      );
    }
  }

  // Validate default steps array shape
  PropTypes.checkPropTypes(
    {
      steps: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string.isRequired,
          type: PropTypes.oneOf(Object.values(StepType)),
        }),
      ).isRequired,
    },
    props,
    location,
    componentName,
  );
};
