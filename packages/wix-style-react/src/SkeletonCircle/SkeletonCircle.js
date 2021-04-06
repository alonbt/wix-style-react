import React from 'react';
import PropTypes from 'prop-types';
import { st, classes } from './SkeletonCircle.st.css';
import { DEFAULT_DIAMETER } from './constants';
import { DEFAULT_SKIN, SKIN_COLOR } from '../SkeletonGroup/constants';
import Box from '../Box';
import { SkeletonGroupContext } from '../SkeletonGroup';

/** SkeletonCircle */
class SkeletonCircle extends React.PureComponent {
  render() {
    const {
      dataHook,
      className,
      diameter,
      margin,
      marginLeft,
      marginRight,
      marginTop,
      marginBottom,
    } = this.props;

    return (
      <SkeletonGroupContext.Consumer>
        {context => {
          const skin = (context && context.skin) || DEFAULT_SKIN;
          return (
            <div
              data-hook={dataHook}
              className={className}
              data-diameter={diameter}
              data-skin={skin}
            >
              <Box
                width={diameter}
                height={diameter}
                margin={margin}
                marginLeft={marginLeft}
                marginRight={marginRight}
                marginTop={marginTop}
                marginBottom={marginBottom}
                backgroundColor={SKIN_COLOR[skin]}
                className={st(classes.root, { skin })}
              />
            </div>
          );
        }}
      </SkeletonGroupContext.Consumer>
    );
  }
}

SkeletonCircle.displayName = 'SkeletonCircle';

SkeletonCircle.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,

  /** Sets the diameter of the box (pixels) */
  diameter: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Sets margin on all sides.
   * Accepts a numeric value (multiplied by spacing unit), predefined spacing value (tiny, small, etc.)
   * a spacing token (SP1, SP2, etc.) or a string of space-separated values ("3px 3px") */
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Sets margin on the top.
   * Accepts a numeric value (multiplied by spacing unit), predefined spacing value (tiny, small, etc.)
   * a spacing token (SP1, SP2, etc.) or a string of space-separated values ("3px 3px") */
  marginTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Sets margin on the right.
   * Accepts a numeric value (multiplied by spacing unit), predefined spacing value (tiny, small, etc.)
   * a spacing token (SP1, SP2, etc.) or a string of space-separated values ("3px 3px") */
  marginRight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Sets margin on the bottom.
   * Accepts a numeric value (multiplied by spacing unit), predefined spacing value (tiny, small, etc.)
   * a spacing token (SP1, SP2, etc.) or a string of space-separated values ("3px 3px") */
  marginBottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Sets margin on the left.
   * Accepts a numeric value (multiplied by spacing unit), predefined spacing value (tiny, small, etc.)
   * a spacing token (SP1, SP2, etc.) or a string of space-separated values ("3px 3px") */
  marginLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SkeletonCircle.defaultProps = { diameter: DEFAULT_DIAMETER };

export default SkeletonCircle;
