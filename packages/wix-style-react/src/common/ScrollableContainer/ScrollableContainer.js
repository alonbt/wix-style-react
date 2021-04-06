import React, { useRef, forwardRef, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash/throttle';
import { getScrollAreaY } from './scrollAreaLogic';
import { extractDataAttributes } from '../../utils/extractAttributes';

const ScrollableContainer = forwardRef(function ScrollableContainer(
  {
    dataHook,
    className,
    style,
    children,
    onScrollAreaChanged,
    onScrollChanged,
    scrollThrottleWait,
    ...restProps
  },
  ref,
) {
  const elementRef = useRef(null);
  // In case a ref was passed from outside we should use it so allow the parent access to the dom node as well.
  const scrollContainerElement = ref || elementRef;
  const scrollAreaY = useRef('');

  const handleScrollAreaChanged = useCallback(
    throttle(
      ({ target }) => {
        const newScrollAreaY = getScrollAreaY(target);
        if (scrollAreaY.current !== newScrollAreaY) {
          scrollAreaY.current = newScrollAreaY;
          onScrollAreaChanged({
            target,
            area: { y: newScrollAreaY },
          });
        }
      },
      scrollThrottleWait,
      { trailing: true },
    ),
    [onScrollAreaChanged, scrollThrottleWait],
  );

  const handleScrollChanged = useCallback(
    throttle(e => onScrollChanged(e), scrollThrottleWait, { trailing: true }),
    [onScrollChanged, scrollThrottleWait],
  );

  useEffect(() => {
    // Registering to the scroll event only if the relevant handlers were provided
    const scrollableElement = scrollContainerElement.current;
    if (onScrollAreaChanged) {
      scrollableElement.addEventListener('scroll', handleScrollAreaChanged);
      // We trigger a call to this handler to expose the initial scroll area to registering consumers
      handleScrollAreaChanged({ target: scrollableElement });
    }
    if (onScrollChanged) {
      scrollableElement.addEventListener('scroll', handleScrollChanged);
    }
    return () => {
      // Unregistering from relevant events on component unmount
      if (onScrollAreaChanged) {
        handleScrollAreaChanged.cancel();
        scrollableElement.removeEventListener(
          'scroll',
          handleScrollAreaChanged,
        );
      }
      if (onScrollChanged) {
        handleScrollChanged.cancel();
        scrollableElement.removeEventListener('scroll', handleScrollChanged);
      }
    };
  }, [
    handleScrollChanged,
    handleScrollAreaChanged,
    onScrollChanged,
    onScrollAreaChanged,
    scrollContainerElement,
  ]);

  const stl = {
    height: 'inherit',
    width: 'inherit',
    ...style,
    overflowY: 'auto',
  };

  return (
    <div
      data-hook={dataHook}
      className={className}
      style={stl}
      ref={scrollContainerElement}
      {...extractDataAttributes(restProps)}
    >
      {children}
    </div>
  );
});

ScrollableContainer.propTypes = {
  /* The wait time value the scroll event will be throttled by */
  scrollThrottleWait: PropTypes.number,
  /** A Handler for scroll area changes, will trigger only when the user scrolls to a different area of
   * the container, see signature for possible areas
   *
   * ##### Signature:
   * `function({area: {y: AreaY, x: AreaX}, target: HTMLElement}) => void`
   *
   * `AreaY`: top | middle | bottom | none
   *
   * `AreaX`: start | middle | end | none (not implemented yet)
   */
  onScrollAreaChanged: PropTypes.func,
  /** A Generic Handler for scroll changes with throttling
   * ##### Signature:
   * function({target: HTMLElement}) => void
   */
  onScrollChanged: PropTypes.func,
};

ScrollableContainer.defaultProps = {
  scrollThrottleWait: 100,
};

export default ScrollableContainer;
