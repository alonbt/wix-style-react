import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classes } from './Input.st.css';
import { InputContext } from './InputContext';
import { SIZES } from './constants';
import { STATUS } from '../StatusIndicator/constants.js';

import Ticker from './Ticker';
import IconAffix from './IconAffix';
import Affix from './Affix';
import Group from './Group';
import InputSuffix, { getVisibleSuffixCount } from './InputSuffix';
import deprecationLog from '../utils/deprecationLog';

const clearButtonSizeMap = {
  [SIZES.small]: 'small',
  [SIZES.medium]: 'medium',
  [SIZES.large]: 'medium',
};

class Input extends Component {
  static Ticker = Ticker;
  static IconAffix = IconAffix;
  static Affix = Affix;
  static Group = Group;

  static StatusError = STATUS.ERROR;
  static StatusWarning = STATUS.WARNING;
  static StatusLoading = STATUS.LOADING;

  constructor(props) {
    super(props);
    this._isMounted = false;

    if (props.size === 'normal') {
      deprecationLog('<Input/> - change prop size="normal" to size="medium"');
    }

    // TODO - deprecate (in a separate PR)
    // if (props.roundInput) {
    //   deprecationLog(
    //     '<Input/> - roundInput prop is deprecated and will be removed in next major release, please use border prop instead',
    //   );
    // }

    this.state = {
      focus: false,
    };
  }

  componentDidMount() {
    this._isMounted = true;
    const { autoFocus, value } = this.props;

    /*
     * autoFocus doesn't automatically selects text like focus do.
     * Therefore we set the selection range, but in order to support prior implementation we set the start position as the end in order to place the cursor there.
     */
    if (autoFocus && !!value) {
      this.input.setSelectionRange(value.length, value.length);
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  _onCompositionChange = isComposing => {
    if (this.props.onCompositionChange) {
      this.props.onCompositionChange(isComposing);
    }

    this.isComposing = isComposing;
  };

  get _isClearFeatureEnabled() {
    const { onClear, clearButton } = this.props;

    return !!onClear || !!clearButton;
  }

  get _isControlled() {
    const { value } = this.props;

    return value !== undefined;
  }

  _extractRef = ref => {
    const { inputRef } = this.props;

    this.input = ref;
    if (inputRef) {
      inputRef(ref);
    }
  };

  _handleSuffixOnClear = event => {
    this.focus();
    this.clear(event);
  };

  _onFocus = event => {
    const { onFocus } = this.props;
    this._isMounted && this.setState({ focus: true });

    onFocus && onFocus(event);

    if (this.props.autoSelect) {
      // Set timeout is needed here since onFocus is called before react
      // gets the reference for the input (specifically when autoFocus
      // is on. So setTimeout ensures we have the ref.input needed in select)
      setTimeout(() => {
        /**
          here we trying to cover edge case with chrome forms autofill,
          after user will trigger chrome form autofill, onFocus will be called for each input,
          each input will cause this.select, select may(mostly all time) cause new onFocus,
          which will cause new this.select, ..., we have recursion which will all time randomly cause
          inputs to become focused.
          To prevent this, we check, that current input node is equal to focused node.
        */
        if (document && document.activeElement === this.input) {
          this.select();
        }
      }, 0);
    }
  };

  _onBlur = event => {
    this.setState({ focus: false });
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  };

  _onClick = event => {
    this.props.onInputClicked && this.props.onInputClicked(event);
  };

  _onKeyDown = event => {
    if (this.isComposing) {
      return;
    }

    const { onKeyDown, onEnterPressed, onEscapePressed } = this.props;

    // On key event
    onKeyDown && onKeyDown(event);

    // Enter
    if (event.key === 'Enter' || event.keyCode === 13) {
      onEnterPressed && onEnterPressed(event);
    }

    // Escape
    if (event.key === 'Escape' || event.keyCode === 27) {
      onEscapePressed && onEscapePressed(event);
    }
  };

  _isValidInput = value => {
    const { type } = this.props;

    if (type === 'number') {
      /*
       * Limit our number input to contain only:
       * - \d - digits
       * - .  - a dot
       * - ,  - a comma
       * - \- - a hyphen minus
       * - +  - a plus sign
       */
      return /^[\d.,\-+]*$/.test(value);
    }

    return true;
  };

  _onChange = event => {
    const { onChange } = this.props;

    if (this._isValidInput(event.target.value)) {
      onChange && onChange(event);
    }
  };

  _onKeyPress = event => {
    if (!this._isValidInput(event.target.value + event.key)) {
      event.preventDefault();
    }
  };

  _renderInput = props => {
    const { customInput: CustomInputComponent, ref, ...rest } = props;
    const inputProps = {
      ...(CustomInputComponent
        ? { ref: ref, ...rest, 'data-hook': 'wsr-custom-input' }
        : { ref, ...rest }),
    };

    return React.cloneElement(
      CustomInputComponent ? <CustomInputComponent /> : <input />,
      inputProps,
    );
  };

  /**
   * Sets focus on the input element
   * @param {FocusOptions} options
   */
  focus = (options = {}) => {
    this.input && this.input.focus(options);
  };

  /**
   * Removes focus on the input element
   */
  blur = () => {
    this.input && this.input.blur();
  };

  /**
   * Selects all text in the input element
   */
  select = () => {
    this.input && this.input.select();
  };

  /**
   * Clears the input.
   * Fires onClear with the given event triggered on the clear button
   *
   * @param event delegated to the onClear call
   */
  clear = event => {
    const { onClear } = this.props;

    if (!this._isControlled) {
      this.input.value = '';
    }

    onClear && onClear(event);
  };

  render(props = {}) {
    const {
      id,
      name,
      value,
      placeholder,
      menuArrow,
      defaultValue,
      tabIndex,
      autoFocus,
      onKeyUp,
      onPaste,
      disableEditing,
      readOnly,
      prefix,
      suffix,
      type,
      maxLength,
      textOverflow,
      disabled,
      status,
      statusMessage,
      tooltipPlacement,
      autocomplete,
      min,
      max,
      step,
      required,
      hideStatusSuffix,
      customInput,
      pattern,
      size,
    } = this.props;

    const onIconClicked = event => {
      if (!disabled) {
        this.input && this.input.focus();
        this._onClick(event);
      }
    };

    // this doesn't work for uncontrolled, "value" refers only to controlled input
    const isClearButtonVisible =
      this._isClearFeatureEnabled && !!value && !disabled;

    const showSuffix =
      !hideStatusSuffix && Object.values(STATUS).includes(status);

    const visibleSuffixCount = getVisibleSuffixCount({
      status: showSuffix,
      statusMessage,
      disabled,
      isClearButtonVisible,
      menuArrow,
      suffix,
    });

    // Aria Attributes
    const ariaAttribute = {};
    Object.keys(this.props)
      .filter(key => key.startsWith('aria'))
      .map(
        key =>
          (ariaAttribute['aria-' + key.substr(4).toLowerCase()] = this.props[
            key
          ]),
      );

    /* eslint-disable no-unused-vars */
    const { className, ...inputElementProps } = props;

    const inputElement = this._renderInput({
      min,
      max,
      step,
      'data-hook': 'wsr-input',
      style: { textOverflow },
      ref: this._extractRef,
      className: classes.input,
      id,
      name,
      disabled,
      defaultValue,
      value,
      onChange: this._onChange,
      onKeyPress: this._onKeyPress,
      maxLength,
      onFocus: this._onFocus,
      onBlur: this._onBlur,
      onWheel: () => {
        // Although it's opposed to the native behavior, we decided to blur an input type="number" on wheel event in order to prevent change in value.
        if (type === 'number') this.blur();
      },
      onKeyDown: this._onKeyDown,
      onPaste,
      placeholder,
      tabIndex,
      autoFocus,
      onClick: this._onClick,
      onKeyUp,
      readOnly: readOnly || disableEditing,
      type,
      required,
      autoComplete: autocomplete,
      onCompositionStart: () => this._onCompositionChange(true),
      onCompositionEnd: () => this._onCompositionChange(false),
      customInput,
      pattern,
      ...ariaAttribute,
      ...inputElementProps,
    });

    return (
      <div className={classes.wrapper}>
        {/* Prefix */}
        {prefix && (
          <InputContext.Provider value={{ ...this.props, inPrefix: true }}>
            {prefix}
          </InputContext.Provider>
        )}

        {/* Input Element */}
        {inputElement}

        {/* Suffix */}
        <InputContext.Provider value={{ ...this.props, inSuffix: true }}>
          {visibleSuffixCount > 0 && (
            <InputSuffix
              status={showSuffix ? status : undefined}
              statusMessage={statusMessage}
              disabled={disabled}
              onIconClicked={onIconClicked}
              isClearButtonVisible={isClearButtonVisible}
              onClear={this._handleSuffixOnClear}
              clearButtonSize={clearButtonSizeMap[size]}
              menuArrow={menuArrow}
              suffix={suffix}
              tooltipPlacement={tooltipPlacement}
            />
          )}
        </InputContext.Provider>
      </div>
    );
  }
}

Input.displayName = 'Input';

Input.defaultProps = {
  autoSelect: true,
  size: 'medium',
  border: 'standard',
  roundInput: false,
  textOverflow: 'clip',
  maxLength: 524288,
  clearButton: false,
  hideStatusSuffix: false,
};

Input.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,

  /** A Unique identifier for the root element */
  id: PropTypes.string,

  /** Used to associate a control with the regions that it controls */
  ariaControls: PropTypes.string,

  /** Used to associate a region with its descriptions, similar to aria-controls but instead associating descriptions to the region and description identifiers are separated with a space */
  ariaDescribedby: PropTypes.string,

  /** Used to define a string that labels the current element in case where a text label is not visible on the screen */
  ariaLabel: PropTypes.string,

  /** Standard React Input autoFocus (focus the element on mount) */
  autoFocus: PropTypes.bool,

  /** Standard React Input autoSelect (select the entire text of the element on focus) */
  autoSelect: PropTypes.bool,

  /** Sets value of native autocomplete attribute (consult the [HTML spec](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-autocomplete) for possible values  */
  autocomplete: PropTypes.string,

  /** Default value for those who wants to use this component un-controlled */
  defaultValue: PropTypes.string,

  /** When set to true this component is disabled */
  disabled: PropTypes.bool,

  /** Sets UI to indicate a status */
  status: PropTypes.oneOf(['error', 'warning', 'loading']),

  /** The status message to display when hovering the status icon, if not given or empty there will be no tooltip */
  statusMessage: PropTypes.node,

  /** When set to true, this input won't display status suffix */
  hideStatusSuffix: PropTypes.bool,

  /** USED FOR TESTING - forces focus state on the input */
  forceFocus: PropTypes.bool,

  /** USED FOR TESTING - forces hover state on the input */
  forceHover: PropTypes.bool,

  /** Sets the maximum number of characters can be inserted */
  maxLength: PropTypes.number,

  /** Should the component include a menu arrow */
  menuArrow: PropTypes.bool,

  /** Displays clear button (X) on a non-empty input */
  clearButton: PropTypes.bool,

  /** Used to reference element data when a form is submitted */
  name: PropTypes.string,

  /** Changes the border style of input */
  border: PropTypes.oneOf(['standard', 'round', 'bottomLine']),

  /**
   * When set to true, this input will be rounded
   * @deprecated
   */
  roundInput: PropTypes.bool,

  /** When set to true, this input will have no rounded corners on its left */
  noLeftBorderRadius: PropTypes.bool,

  /** When set to true, this input will have no rounded corners on its right */
  noRightBorderRadius: PropTypes.bool,

  /** Standard input onBlur callback */
  onBlur: PropTypes.func,

  /** Standard input onChange callback */
  onChange: PropTypes.func,

  /** Displays clear button (X) on a non-empty input and calls callback with no arguments */
  onClear: PropTypes.func,

  /** A callback function to be called on compositionstart/compositionend events */
  onCompositionChange: PropTypes.func,

  /** Called when user presses -enter- */
  onEnterPressed: PropTypes.func,

  /** Called when user presses -escape- */
  onEscapePressed: PropTypes.func,

  /** Standard input onFocus callback */
  onFocus: PropTypes.func,

  /** Standard input onClick callback */
  onInputClicked: PropTypes.func,

  /** Standard input onKeyDown callback */
  onKeyDown: PropTypes.func,

  /** Standard input onKeyUp callback */
  onKeyUp: PropTypes.func,

  /** Called when user pastes text from clipboard (using mouse or keyboard shortcut) */
  onPaste: PropTypes.func,

  /** Placeholder to display */
  placeholder: PropTypes.string,

  /** Component you want to show as the prefix of the input */
  prefix: PropTypes.node,

  /** Sets the input to readOnly */
  readOnly: PropTypes.bool,

  /** When set to true, this input will not be editable */
  disableEditing: PropTypes.bool,

  /** Flip the magnify glass image so it be more suitable to rtl */
  rtl: PropTypes.bool,

  /** Specifies the size of the input */
  size: PropTypes.oneOf(['small', 'medium', 'large']),

  /** Component you want to show as the suffix of the input */
  suffix: PropTypes.node,

  /** Standard component tabIndex */
  tabIndex: PropTypes.number,

  /**
   * Text overflow behavior:
   * * clip (default)
   * * ellipsis
   */
  textOverflow: PropTypes.string,

  /** Placement of status tooltips */
  tooltipPlacement: PropTypes.string,

  /** Specifies the type of `<input/>` element to display.default is text */
  type: PropTypes.string,

  /** Specifies the value of the element */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** When present, it specifies that an input field must be filled out before submitting the form */
  required: PropTypes.bool,

  /** Minimum value input can have - similar to html5 min attribute */
  min: PropTypes.number,

  /** Maximum value input can have - similar to html5 max attribute */
  max: PropTypes.number,

  /** Specifies the interval between the allowed number values */
  step: PropTypes.number,

  /** Use a customized input component instead of the default html input tag */
  customInput: PropTypes.elementType
    ? PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.node,
        PropTypes.elementType,
      ])
    : PropTypes.oneOfType([PropTypes.func, PropTypes.node]),

  /** Pattern the value must match to be valid (regex) */
  pattern: PropTypes.string,
};

export default Input;
