import React from 'react';
import PropTypes from 'prop-types';
import { st, classes } from './Caption.st.css';
import Ellipsis, { extractEllipsisProps } from '../common/Ellipsis';
import { EllipsisCommonProps } from '../common/PropTypes/EllipsisCommon';

const CaptionWithEllipsis = ({
  dataHook,
  className,
  tagName,
  caption,
  light,
  children,
  ...props
}) => {
  const { ellipsisProps, componentProps } = extractEllipsisProps(props);

  return (
    <Ellipsis
      {...ellipsisProps}
      wrapperClassName={classes[caption]}
      render={({ ref, ellipsisClasses }) => {
        return React.createElement(
          tagName,
          {
            ref,
            className: st(
              classes.root,
              { caption },
              ellipsisClasses(className),
            ),
            'data-hook': dataHook,
            'data-light': light,
            ...componentProps,
          },
          children,
        );
      }}
    />
  );
};

CaptionWithEllipsis.displayName = 'Caption';

CaptionWithEllipsis.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** class to be applied to the root element */
  className: PropTypes.string,

  /** tag name that will be rendered */
  tagName: PropTypes.string,

  caption: PropTypes.oneOf(['c1']),

  /** make the text color lighter */
  light: PropTypes.bool,

  ...EllipsisCommonProps,
};

CaptionWithEllipsis.defaultProps = {
  caption: 'c1',
  tagName: 'span',
  ...Ellipsis.defaultProps,
};

export default CaptionWithEllipsis;
