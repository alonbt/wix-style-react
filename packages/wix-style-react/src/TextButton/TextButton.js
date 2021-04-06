import React, { PureComponent } from 'react';
import { ButtonNext } from 'wix-ui-core/dist/src/components/button-next';
import Ellipsis from '../common/Ellipsis';
import { TooltipCommonProps } from '../common/PropTypes/TooltipCommon';
import PropTypes from 'prop-types';
import { generateDataAttr } from '../utils/generateDataAttr';

import { st, classes } from './TextButton.st.css';

class TextButton extends PureComponent {
  static displayName = 'TextButton';

  static propTypes = {
    /** render as some other component or DOM tag */
    as: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.object,
      PropTypes.string,
    ]),
    /** Additional classes */
    className: PropTypes.string,
    /** Skins of TextButton content */
    skin: PropTypes.oneOf([
      'standard',
      'light',
      'premium',
      'dark',
      'destructive',
    ]),
    /** Underline of TextButton content */
    underline: PropTypes.oneOf(['none', 'onHover', 'always']),
    /** Weight of TextButton content */
    weight: PropTypes.oneOf(['thin', 'normal']),
    /** Size of TextButton content */
    size: PropTypes.oneOf(['tiny', 'small', 'medium']),
    /** Click event handler  */
    onClick: PropTypes.func,
    /** Element based icon (svg, image etc.) */
    suffixIcon: PropTypes.element,
    /** Element based icon (svg, image etc.) */
    prefixIcon: PropTypes.element,
    /** Applies disabled styles */
    disabled: PropTypes.bool,
    /** String based node */
    children: PropTypes.node,
    /** String based data hook */
    dataHook: PropTypes.string,
    /** Stretches text button to its container width */
    fluid: PropTypes.bool,
    /** should the text get ellipsized with tooltip, or should it get broken into lines when it reaches the end of its container */
    ellipsis: PropTypes.bool,
    /** True by default, set it to false in order to show ellipsis without a tooltip. */
    showTooltip: PropTypes.bool,
    /** Props that modify the Tooltip created from text ellipsis */
    tooltipProps: PropTypes.shape(TooltipCommonProps),
    /** Defines a string value that labels the button element */
    ariaLabel: PropTypes.string,
    /** Identifies the element that labels the button element */
    ariaLabelledBy: PropTypes.string,
    /** Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. */
    ariaHaspopup: PropTypes.string,
    /** Indicates to screen reader users whether the collapsable content below is in the expanded or in the collapsed state */
    ariaExpanded: PropTypes.bool,
  };

  static defaultProps = {
    skin: 'standard',
    underline: 'none',
    weight: 'thin',
    size: 'medium',
    disabled: false,
    fluid: false,
    tooltipProps: {},
  };

  render() {
    const {
      skin,
      underline,
      weight,
      size,
      children,
      className,
      dataHook,
      fluid,
      ellipsis,
      showTooltip,
      tooltipProps,
      ariaLabel,
      ariaLabelledBy,
      ariaHaspopup,
      ariaExpanded,
      ...rest
    } = this.props;

    return (
      <Ellipsis
        ellipsis={ellipsis}
        showTooltip={showTooltip}
        {...tooltipProps}
        render={({ ref, ellipsisClasses }) => (
          <ButtonNext
            {...rest}
            {...generateDataAttr(this.props, [
              'skin',
              'size',
              'weight',
              'underline',
            ])}
            className={st(
              classes.root,
              { skin, underline, weight, size, fluid, ellipsis },
              className,
            )}
            data-hook={dataHook}
            contentClassName={ellipsisClasses()}
            contentRef={ref}
            aria-label={ariaLabel}
            aria-labelledby={ariaLabelledBy}
            aria-haspopup={ariaHaspopup}
            aria-expanded={ariaExpanded}
          >
            {children}
          </ButtonNext>
        )}
      />
    );
  }
}

export default TextButton;
