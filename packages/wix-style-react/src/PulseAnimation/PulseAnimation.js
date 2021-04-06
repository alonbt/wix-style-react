import React from 'react';
import PropTypes from 'prop-types';
import { st, classes } from './PulseAnimation.st.css';
import Animate from '../Animate';
import { childSize, childWidthRange } from './constants';
import { isValueInRange } from '../Animate/utils';

/** PulseAnimation*/
class PulseAnimation extends React.PureComponent {
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
      color,
      borderRadius,
    } = this.props;

    const { animationSize } = this.state;

    return (
      <Animate
        dataHook={dataHook}
        animateClasses={st(classes.root, {
          active,
          loop,
          size: animationSize,
          color,
        })}
        animateInlineStyle={{ borderRadius }}
        onEnd={onEnd}
        onStart={onStart}
        delay={delay}
        ref={this.rootRef}
      >
        {children}
      </Animate>
    );
  }
}

PulseAnimation.displayName = 'PulseAnimation';

PulseAnimation.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** Node to animate (one child node) */
  children: PropTypes.node.isRequired,

  /** Triggers the animation transition */
  active: PropTypes.bool,

  /** A callback fired immediately after the animation starts. */
  onStart: PropTypes.func,

  /** A callback fired immediately after the animation ends. */
  onEnd: PropTypes.func,

  /** When set to true, the child component animate repetitively until stopped by other event*/
  loop: PropTypes.bool,

  /** Set a delay before the animation execution. When provided a number- sets this as `ms`.*/
  delay: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** The color of the animation */
  color: PropTypes.oneOf(['B10', 'R10', 'P10', 'G10']).isRequired,

  /** Sets the border-radius css property of the animation */
  borderRadius: PropTypes.string,
};

PulseAnimation.defaultProps = {
  loop: true,
};

export default PulseAnimation;
