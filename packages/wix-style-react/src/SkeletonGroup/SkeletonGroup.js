import React from 'react';
import PropTypes from 'prop-types';
import { st, classes, vars } from './SkeletonGroup.st.css';
import { SkeletonGroupContext } from './SkeletonGroupAPI';

/** SkeletonGroup */
class SkeletonGroup extends React.PureComponent {
  render() {
    const { dataHook, className, skin, children, backgroundColor } = this.props;
    return (
      <div
        data-hook={dataHook}
        className={st(classes.root, className)}
        style={{
          [vars['color']]: backgroundColor,
        }}
      >
        <SkeletonGroupContext.Provider value={{ skin }}>
          {children}
        </SkeletonGroupContext.Provider>
        <div className={classes.animator} />
      </div>
    );
  }
}

SkeletonGroup.displayName = 'SkeletonGroup';

SkeletonGroup.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,

  /** Effects the color of the Skeleton */
  skin: PropTypes.oneOf(['dark', 'light']),

  /** The background on which the skeleton is rendered */
  backgroundColor: PropTypes.string,
};

SkeletonGroup.defaultProps = { skin: 'light' };

export default SkeletonGroup;
