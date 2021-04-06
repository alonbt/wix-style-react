import React from 'react';
import PropTypes from 'prop-types';
import { st, classes } from './Text.st.css';

const getStyleDataAttributes = styleAttributes =>
  Object.keys(styleAttributes).reduce((acc, styleKey) => {
    acc[`data-${styleKey}`] = styleAttributes[styleKey];
    return acc;
  }, {});

const RawText = React.forwardRef(
  (
    {
      size,
      secondary,
      skin,
      light,
      weight,
      tagName,
      children,
      ellipsis,
      showDelay,
      hideDelay,
      appendTo,
      flip,
      fixed,
      placement,
      timeout,
      maxWidth,
      zIndex,
      showTooltip,
      listStyle,
      ...rest
    },
    ref,
  ) => {
    /* eslint-disable no-unused-vars */
    const { dataHook, className, ...textProps } = rest;

    const styleAttributes = {
      size,
      secondary,
      skin,
      light,
      weight,
      'list-style': listStyle,
    };
    const styleDataAttributes = getStyleDataAttributes(styleAttributes);

    return React.createElement(
      tagName,
      {
        ref,
        ...textProps,
        'data-hook': dataHook,
        className: st(classes.root, styleAttributes, className),
        ...styleDataAttributes,
      },
      children,
    );
  },
);

RawText.displayName = 'Text';

RawText.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** class to be applied to the root element */
  className: PropTypes.string,

  /** tag name that will be rendered */
  tagName: PropTypes.string,

  /** Styling to be applied to the root element */
  style: PropTypes.object,

  /** font size of the text */
  size: PropTypes.oneOf(['tiny', 'small', 'medium']),

  /** any nodes to be rendered (usually text nodes) */
  children: PropTypes.any,

  /** is the text type is secondary. Affects the font color */
  secondary: PropTypes.bool,

  /** skin color of the text */
  skin: PropTypes.oneOf([
    'standard',
    'success',
    'error',
    'premium',
    'disabled',
    'primary',
  ]),

  /** make the text color lighter */
  light: PropTypes.bool,

  /** font weight of the text */
  weight: PropTypes.oneOf(['thin', 'normal', 'bold']),
};

RawText.defaultProps = {
  size: 'medium',
  secondary: false,
  skin: 'standard',
  light: false,
  weight: 'thin',
  tagName: 'span',
  listStyle: 'checkmark',
};

export default RawText;
