import React from 'react';
import PropTypes from 'prop-types';
import { st, classes } from './BounceAnimation.st.css';
import Animate from '../Animate';
import { childSize, childWidthRange } from './constants';
import { isValueInRange } from '../Animate/utils';

/** Bounce Animation*/
class BounceAnimation extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      animationSize: undefined,
    };
    this.rootRef = React.createRef();
  }

  componentDidMount() {
    const animationSize = this._getAnimationSize();
    this.setState({ animationSize });
  }

  _getAnimationSize = () => {
    const childWidth = this.rootRef.current.offsetWidth;
    const { from, to } = childWidthRange.medium;

    return isValueInRange(childWidth, from, to)
      ? childSize.medium
      : childSize.small;
  };

  render() {
    const {
      dataHook,
      active,
      onEnd,
      onStart,
      loop,
      children,
      delay,
    } = this.props;

    const { animationSize } = this.state;

    return (
      <Animate
        dataHook={dataHook}
        delay={delay}
        animateClasses={st(classes.root, { active, loop, size: animationSize })}
        onEnd={onEnd}
        onStart={onStart}
        ref={this.rootRef}
      >
        {children}
      </Animate>
    );
  }
}

BounceAnimation.displayName = 'Bounce';

BounceAnimation.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** The component which we would like to animate. */
  children: PropTypes.node.isRequired,

  /** Triggers the animation transition */
  active: PropTypes.bool,

  /** A callback fired immediately after the animation starts. */
  onStart: PropTypes.func,

  /** A callback fired immediately after the animation ends. */
  onEnd: PropTypes.func,

  /** when set to true, the child component animate repetitively until stopped by other event*/
  loop: PropTypes.bool,

  /** set a delay before the animation execution. When provided a number- sets this as `ms`.*/
  delay: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BounceAnimation.defaultProps = {};

export default BounceAnimation;
