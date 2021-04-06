import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Animator } from 'wix-animations';

// Returns the height of element including vertical margin
export const getElementHeight = wrapper => element => {
  const offsetTop = wrapper
    ? element.getBoundingClientRect().y - wrapper.getBoundingClientRect().y
    : 0;
  const marginBottom = parseInt(
    window.getComputedStyle(element).getPropertyValue('margin-bottom') || 0,
    10,
  );

  return element.scrollHeight + offsetTop + marginBottom;
};

/** `<Collapse/>` component is used for hideable content.
 *
 * Easily create accordions or within `<Card/>` to collapse its `<Card.Content/>`.
 */
const Collapse = ({ children, open, dataHook }) => {
  const wrapperRef = useRef();
  return (
    <div data-hook={dataHook} ref={wrapperRef}>
      <Animator
        show={open}
        height={getElementHeight(wrapperRef.current)}
        children={children}
        skipMountTransition
      />
    </div>
  );
};

Collapse.displayName = 'Collapse';

Collapse.propTypes = {
  /**
   * any node to be rendered inside
   */
  children: PropTypes.node,
  /**
   * determinants whether the element is collapsed.
   */
  open: PropTypes.bool,
  /**
   * string based data hook for testing
   */
  dataHook: PropTypes.string,
};

Collapse.defaultProps = {
  open: true,
};
export default Collapse;
