import React from 'react';
import PropTypes from 'prop-types';

/** Animate Component */
const getDelayValue = delay => {
  switch (typeof delay) {
    case 'string':
      return delay;
    case 'number':
      return `${delay}ms`;
    default:
      return undefined;
  }
};

const Animate = React.forwardRef(
  (
    {
      dataHook,
      animateClasses,
      delay,
      onStart,
      onEnd,
      children,
      animateInlineStyle,
    },
    ref,
  ) => (
    <div
      data-hook={dataHook}
      className={animateClasses}
      style={{
        animationDelay: getDelayValue(delay),
        ...animateInlineStyle,
      }}
      onAnimationStart={onStart}
      onAnimationEnd={onEnd}
      ref={ref}
    >
      {children && React.Children.only(children)}
    </div>
  ),
);

Animate.propTypes = {
  /** Classes to be applied to the root element. */
  animateClasses: PropTypes.string,

  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** Any node to render to animate. */
  children: PropTypes.node.isRequired,

  /** A callback fired immediately after the transition starts.*/
  onStart: PropTypes.func,

  /** A callback fired immediately after the transition ended.*/
  onEnd: PropTypes.func,

  /** set a delay before the animation execution. When provided a number- sets this as `ms`.*/
  delay: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Add inline styles to the animation */
  animateInlineStyle: PropTypes.object,
};

Animate.displayName = 'Animate';

Animate.defaultProps = {};

export default Animate;
