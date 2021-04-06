import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '../../IconButton/IconButton';
import { classes } from '../Carousel.st.css';

const skinPriorityMap = {
  standard: 'secondary',
  inverted: 'primary',
  light: 'primary',
  transparent: 'primary',
  premium: 'primary',
};

const SliderArrow = ({
  dataHook,
  arrowSize,
  buttonSkin,
  icon,
  className,
  controlsStartEnd,
  ...remainingProps
}) => {
  const isControlOnEdge = className.includes('slick-disabled');

  return isControlOnEdge && controlsStartEnd === 'hidden' ? null : (
    <div {...remainingProps} data-hook={dataHook} className={className}>
      <IconButton
        className={classes.controls}
        skin={buttonSkin}
        size={arrowSize}
        disabled={isControlOnEdge}
        priority={skinPriorityMap[buttonSkin]}
      >
        {icon}
      </IconButton>
    </div>
  );
};

SliderArrow.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,
  /** Icon to be rendered within the icon button */
  icon: PropTypes.element.isRequired,
};

export default SliderArrow;
