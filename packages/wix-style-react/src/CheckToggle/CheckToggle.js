import React from 'react';
import PropTypes from 'prop-types';
import { st, classes } from './CheckToggle.st.css';
import { dataHooks } from './constants';
import Tooltip from '../Tooltip';
import { TooltipCommonProps } from '../common/PropTypes/TooltipCommon';
import { withFocusable } from 'wix-ui-core/dist/src/hocs/Focusable/FocusableHOC';
import ConfirmSmall from 'wix-ui-icons-common/ConfirmSmall';
import Confirm from 'wix-ui-icons-common/Confirm';

const icon = {
  small: <ConfirmSmall />,
  medium: <Confirm />,
};

/** CheckToggle */
class CheckToggle extends React.PureComponent {
  state = {
    checked: !!this.props.checked,
  };

  /**
   * Checks if the component is controlled or uncontrolled.
   * The component is controlled only if prop checked is provided.
   *
   * @returns boolean
   * @private
   */
  _isControlled = () => {
    return this.props.hasOwnProperty('checked');
  };

  /**
   * Toggles checked state and triggers the onChange callback.
   * Except when disabled
   */
  _handleChange = changeEvent => {
    const { checked } = this.state;
    const { onChange } = this.props;

    this.setState({ checked: !checked }, () => {
      if (onChange) onChange(changeEvent);
    });
  };

  /**
   * Renders the toggle itself
   * @returns React.ReactNode
   * @private
   */
  _renderInput = () => {
    const { checked } = this._isControlled() ? this.props : this.state;
    const { size, disabled, onChange } = this.props;

    return (
      <>
        <input
          type="checkbox"
          className={classes.input}
          data-hook={dataHooks.toggle}
          checked={checked}
          disabled={disabled}
          onChange={this._isControlled() ? onChange : this._handleChange}
        />
        <span className={classes.toggle}>{icon[size]}</span>
      </>
    );
  };

  /**
   * Renders a tooltip wrapper
   * @returns React.ReactNode
   * @private
   */
  _renderTooltip = () => {
    const { tooltipContent, tooltipProps } = this.props;
    return (
      <Tooltip
        dataHook={dataHooks.tooltip}
        content={tooltipContent}
        {...tooltipProps}
      >
        {this._renderInput()}
      </Tooltip>
    );
  };

  render() {
    const { checked } = this._isControlled() ? this.props : this.state;
    const {
      dataHook,
      size,
      skin,
      disabled,
      tooltipContent,
      focusableOnFocus,
      focusableOnBlur,
      className,
    } = this.props;

    return (
      <label
        className={st(
          classes.root,
          { checked, size, skin, disabled },
          className,
        )}
        data-hook={dataHook}
        onFocus={focusableOnFocus}
        onBlur={focusableOnBlur}
      >
        {tooltipContent ? this._renderTooltip() : this._renderInput()}
      </label>
    );
  }
}

CheckToggle.displayName = 'CheckToggle';

CheckToggle.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,

  /** If true, the check is toggled */
  checked: PropTypes.bool,

  /** A callback function, called when the check value is changed */
  onChange: PropTypes.func,

  /** Applies disabled styles and prevent toggling the check */
  disabled: PropTypes.bool,

  /** The size of the component */
  size: PropTypes.oneOf(['small', 'medium']),

  /** The color of the component */
  skin: PropTypes.oneOf(['standard', 'success']),

  /** When provided, hover will display a tooltip */
  tooltipContent: PropTypes.node,

  /** Tooltip props, common for all tooltips */
  tooltipProps: PropTypes.shape(TooltipCommonProps),
};

CheckToggle.defaultProps = {
  disabled: false,
  size: 'small',
  skin: 'standard',
};

export default withFocusable(CheckToggle);
