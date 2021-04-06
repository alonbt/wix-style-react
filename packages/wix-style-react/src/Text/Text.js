import React from 'react';
import RawText from './RawText';
import PropTypes from 'prop-types';
import { st, classes } from './Text.st.css';
import Ellipsis, { extractEllipsisProps } from '../common/Ellipsis';
import { TooltipCommonProps } from '../common/PropTypes/TooltipCommon';

const TextWithEllipsis = ({ className, tooltipProps, ...props }) => {
  const { ellipsisProps, componentProps } = extractEllipsisProps(props);
  return (
    <Ellipsis
      {...ellipsisProps}
      {...tooltipProps}
      wrapperClassName={st(classes.root, {
        size: props.size,
        weight: props.weight,
        listStyle: props.listStyle,
      })}
      render={({ ref, ellipsisClasses, ellipsisInlineStyle }) => (
        <RawText
          {...componentProps}
          ref={ref}
          className={ellipsisClasses(className)}
          style={ellipsisInlineStyle}
        />
      )}
    />
  );
};

TextWithEllipsis.displayName = 'Text';

TextWithEllipsis.propTypes = {
  /*
   * Text props
   */

  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** class to be applied to the root element */
  className: PropTypes.string,

  /** tag name that will be rendered */
  tagName: PropTypes.string,

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

  /** set list items style */
  listStyle: PropTypes.oneOf(['checkmark', 'circle']),

  /** make the text color lighter */
  light: PropTypes.bool,

  /** font weight of the text */
  weight: PropTypes.oneOf(['thin', 'normal', 'bold']),

  /*
   * Ellipsis props
   */

  /** When true, text that is longer than it's container will be truncated to a single line followed by ellipsis. Otherwise the text will break into several lines. */
  ellipsis: PropTypes.bool,

  /** True by default, set it to false in order to show ellipsis without a tooltip. */
  showTooltip: PropTypes.bool,

  /** tooltips content zindex */
  zIndex: PropTypes.number,

  /** tooltip content placement in relation to target element */
  placement: PropTypes.string,

  /** disables tooltip element trigger behaviour. If not specified, `disabled` prop of the `children` element will be used. */
  disabled: PropTypes.bool,

  /** tooltips content calculation relation to a dom element. Can be either:
   *  `'window', 'scrollParent', 'viewport', 'parent'`, `element` or
   * `function` based predicate i.e. (elm) =>
   *  elm.getAttribute('data-hook') === 'value'
   */
  appendTo: PropTypes.oneOfType([
    PropTypes.oneOf(['window', 'scrollParent', 'viewport', 'parent']),
    PropTypes.element,
    PropTypes.func,
  ]),

  /** whether to enable the flip behaviour. This behaviour is used to flip the Tooltips placement when it starts to overlap the target element. */
  flip: PropTypes.bool,

  /** whether to enable the fixed behaviour. This behaviour is used to keep the Tooltip at it's original placement even when it's being positioned outside the boundary. */
  fixed: PropTypes.bool,

  /** time in milliseconds to wait before showing the tooltip */
  enterDelay: PropTypes.number,

  /**  time in milliseconds to wait before hiding the tooltip. Defaults to 0. */
  exitDelay: PropTypes.number,

  /** tooltip content container width in pixels */
  maxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** callback on tooltips content show event */
  onShow: PropTypes.func,

  /** callback on tooltips content hide event */
  onHide: PropTypes.func,

  /** moves tooltip content relative to the parent by x or y */
  moveBy: PropTypes.shape({ x: PropTypes.number, y: PropTypes.number }),

  /** Moves arrow by amount */
  moveArrowTo: PropTypes.number,

  /** align tooltip content */
  textAlign: PropTypes.oneOf(['start', 'center']),

  /** Properties for tooltip */
  tooltipProps: PropTypes.shape(TooltipCommonProps),
};

TextWithEllipsis.defaultProps = {
  ...RawText.defaultProps,
  ...Ellipsis.defaultProps,
};

export default TextWithEllipsis;
