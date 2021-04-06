import React from 'react';
import PropTypes from 'prop-types';
import CheckboxChecked from 'wix-ui-icons-common/system/CheckboxChecked';
import CheckboxIndeterminate from 'wix-ui-icons-common/system/CheckboxIndeterminate';
import { st, classes } from './Checkbox.st.css';
import Text from '../Text';
import { withFocusable } from 'wix-ui-core/dist/src/hocs/Focusable/FocusableHOC';

import deprecationLog from '../utils/deprecationLog';
import { generateID } from '../utils/generateId';
import Tooltip from '../Tooltip';
import * as DATA_ATTR from './DataAttr';
import { dataHooks } from './constants';
import { TooltipCommonProps } from '../common/PropTypes/TooltipCommon';

/** a simple WixStyle checkbox */
class Checkbox extends React.PureComponent {
  // TODO fix me please. We need to get away from ids.
  _id = `${Checkbox.displayName}-${generateID()}`;

  _getDataAttributes = () => {
    const { checked, indeterminate, disabled, hasError } = this.props;
    return {
      [DATA_ATTR.DATA_CHECK_TYPE]: indeterminate
        ? DATA_ATTR.CHECK_TYPES.INDETERMINATE
        : checked
        ? DATA_ATTR.CHECK_TYPES.CHECKED
        : DATA_ATTR.CHECK_TYPES.UNCHECKED,
      [DATA_ATTR.DATA_HAS_ERROR]: hasError && !disabled,
      [DATA_ATTR.DATA_DISABLED]: disabled,
    };
  };

  render() {
    const {
      id = this._id,
      checked,
      indeterminate,
      disabled,
      hasError,
      errorMessage,
      selectionArea,
      vAlign,
      size,
      onChange,
      children,
      dataHook,
      focusableOnFocus,
      focusableOnBlur,
      className,
      tooltipProps,
      tooltipContent,
      selectionAreaSkin,
      selectionAreaPadding,
    } = this.props;

    if (errorMessage) {
      deprecationLog(
        '<Checkbox/> - errorMessage prop is deprecated and will be removed in next major release, please use tooltipContent instead',
      );
    }
    const isTooltipDisabled =
      (tooltipProps && tooltipProps.disabled) ||
      disabled ||
      (!tooltipContent && (!hasError || !errorMessage));

    return (
      <div
        data-hook={dataHook}
        className={st(
          classes.root,
          {
            vAlign,
            selectionArea,
            selectionAreaSkin,
            disabled,
            error: hasError && !disabled,
            selection: indeterminate
              ? 'indeterminate'
              : checked
              ? 'checked'
              : 'unchecked',
            indeterminate,
          },
          className,
        )}
        onFocus={focusableOnFocus}
        onBlur={focusableOnBlur}
        tabIndex={disabled ? null : 0}
        {...this._getDataAttributes()}
      >
        <input
          data-hook={dataHooks.input}
          type="checkbox"
          id={id}
          checked={checked}
          disabled={disabled}
          onChange={disabled ? null : onChange}
          style={{ display: 'none' }}
        />
        <label
          htmlFor={id}
          data-hook={dataHooks.label}
          className={classes.label}
        >
          <div
            className={classes.labelInner}
            style={{ padding: selectionAreaPadding }}
          >
            <Tooltip
              dataHook={dataHooks.boxTooltip}
              disabled={isTooltipDisabled}
              content={tooltipContent || errorMessage || ' '}
              textAlign="center"
              maxWidth={230}
              hideDelay={150}
              zIndex={10000}
              {...tooltipProps}
            >
              <div className={classes.outer}>
                <div data-hook={dataHooks.box} className={classes.checkbox}>
                  <div
                    className={classes.inner}
                    onClick={e => e.stopPropagation()}
                  >
                    {indeterminate ? (
                      <CheckboxIndeterminate />
                    ) : (
                      <CheckboxChecked />
                    )}
                  </div>
                </div>
              </div>
            </Tooltip>
            {children && (
              <Text
                size={size}
                onClick={e => e.stopPropagation()}
                weight="thin"
                dataHook={dataHooks.children}
                className={classes.children}
              >
                {children}
              </Text>
            )}
          </div>
        </label>
      </div>
    );
  }
}

Checkbox.displayName = 'Checkbox';

Checkbox.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** used for automatic testing */
  checked: PropTypes.bool,

  children: PropTypes.node,

  /** Is checkbox disabled */
  disabled: PropTypes.bool,

  /** Does checkbox has an error */
  hasError: PropTypes.bool,

  id: PropTypes.string,

  /** Checkbox is in an indeterminate state */
  indeterminate: PropTypes.bool,

  /**
   * The error message when there's an error
   * @deprecated
   * */
  errorMessage: PropTypes.string,

  /** Selection area emphasises the clickable area, none means no emphasis, hover is when the mouse is on the component, and always will show constantly */
  selectionArea: PropTypes.oneOf(['none', 'hover', 'always']),

  /** Positioning of the checkbox compared to the label */
  vAlign: PropTypes.oneOf(['center', 'top']),

  /** used for automatic testing */
  hover: PropTypes.bool,

  /** Size of the checkbox label */
  size: PropTypes.oneOf(['small', 'medium']),

  /** A callback function triggered when the checkbox state is changed */
  onChange: PropTypes.func,

  /** Define styles through a classname */
  className: PropTypes.string,

  /** Selection area skin emphasises the style of the clickable area for selectionArea ('hover' or 'always'),  filled (default) means selectionArea has backgound, outlined means selectionArea has outline */
  selectionAreaSkin: PropTypes.oneOf(['filled', 'outlined']),

  /** Selection area padding emphasises the padding of the clickable area, empty means default padding, not empty overrides the default padding*/
  selectionAreaPadding: PropTypes.string,

  /** Tooltip content. Can be either string or renderable node */
  tooltipContent: PropTypes.node,

  /** Tooltip props, common for all tooltips */
  tooltipProps: PropTypes.shape(TooltipCommonProps),
};

Checkbox.defaultProps = {
  checked: false,
  size: 'medium',
  selectionArea: 'none',
  vAlign: 'center',
  onChange: e => e.stopPropagation(),
  hasError: false,
  disabled: false,
  indeterminate: false,
  selectionAreaSkin: 'filled',
};

export default withFocusable(Checkbox);
