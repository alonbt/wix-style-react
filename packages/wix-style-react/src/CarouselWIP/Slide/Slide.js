import React from 'react';
import PropTypes from 'prop-types';
import { DATA_HOOKS } from '../constants';

const Slide = ({
  dataHook,
  className,
  children,
  image,
  width,
  gutter,
  imagePosition,
  imageFit,
}) => (
  <div
    data-hook={dataHook}
    className={className}
    style={{
      flex: '0 0 auto',
      width,
      marginInlineStart: gutter,
      objectPosition: imagePosition,
      objectFit: imageFit,
    }}
  >
    {image ? (
      <img data-hook={DATA_HOOKS.carouselImage} src={image.src} />
    ) : (
      children
    )}
  </div>
);

Slide.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** A css class to be applied to the slide element */
  className: PropTypes.string,

  /** Children to render inside the slide */
  children: PropTypes.node,

  /** Object containing the src for the slide image */
  image: PropTypes.object,

  /** Width of the slide */
  width: PropTypes.string,

  /** Width for spacing before the slide */
  gutter: PropTypes.string,

  /** Sets the image position */
  imagePosition: PropTypes.string,

  /** Sets the image fit */
  imageFit: PropTypes.oneOf(['fill', 'contain', 'cover', 'none', 'scale-down']),
};

export default Slide;
