import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import omit from 'omit';
import DropdownLayout from '../DropdownLayout/DropdownLayout';
import { chainEventHandlers } from '../utils/ChainEventHandlers';
import { classes } from './InputWithOptions.st.css';
import uniqueId from 'lodash/uniqueId';
import Popover from '../Popover';
import HighlightContext from './HighlightContext';

export const DEFAULT_VALUE_PARSER = option => option.value;

const DEFAULT_POPOVER_PROPS = {
  appendTo: 'parent',
  flip: false,
  fixed: true,
  placement: 'bottom',
};

class InputWithOptions extends Component {
  // Abstraction
  inputClasses() {}
  dropdownClasses() {}
  dropdownAdditionalProps() {}
  inputAdditionalProps() {}

  /**
   * An array of key codes that act as manual submit. Will be used within
   * onKeyDown(event).
   *
   * @returns {KeyboardEvent.key[]}
   */
  getManualSubmitKeys() {
    return ['Enter', 'Tab'];
  }

  constructor(props) {
    super(props);
    this.state = {
      inputValue: props.value || '',
      showOptions: false,
      lastOptionsShow: 0,
      isEditing: false,
    };

    this.uniqueId = uniqueId('InputWithOptions');
    this._onSelect = this._onSelect.bind(this);
    this._onFocus = this._onFocus.bind(this);
    this._onBlur = this._onBlur.bind(this);
    this._onChange = this._onChange.bind(this);
    this._onKeyDown = this._onKeyDown.bind(this);
    this.focus = this.focus.bind(this);
    this.blur = this.blur.bind(this);
    this.select = this.select.bind(this);
    this.hideOptions = this.hideOptions.bind(this);
    this.showOptions = this.showOptions.bind(this);
    this._onManuallyInput = this._onManuallyInput.bind(this);
    this._renderDropdownLayout = this._renderDropdownLayout.bind(this);
    this._onInputClicked = this._onInputClicked.bind(this);
    this.closeOnSelect = this.closeOnSelect.bind(this);
    this.onCompositionChange = this.onCompositionChange.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      !this.props.showOptionsIfEmptyInput &&
      ((!prevProps.value && this.props.value) ||
        (!prevState.inputValue && this.state.inputValue))
    ) {
      this.showOptions();
    }

    // Clear value in controlled mode
    if (prevProps.value !== this.props.value && this.props.value === '') {
      this.setState({ inputValue: '' });
    }
  }

  onCompositionChange(isComposing) {
    this.setState({ isComposing });
  }

  onClickOutside = () => {
    // Hide the popover
    this.hideOptions();

    // Trigger the ClickOutside callback
    if (this.props.onClickOutside) {
      this.props.onClickOutside();
    }
  };

  renderInput() {
    const inputAdditionalProps = this.inputAdditionalProps();
    const inputProps = Object.assign(
      omit(
        [
          'onChange',
          'dataHook',
          'dropDirectionUp',
          'focusOnSelectedOption',
          'onClose',
          'onSelect',
          'onOptionMarked',
          'overflow',
          'visible',
          'options',
          'selectedId',
          'tabIndex',
          'onClickOutside',
          'fixedHeader',
          'fixedFooter',
          'maxHeightPixels',
          'minWidthPixels',
          'withArrow',
          'closeOnSelect',
          'onMouseEnter',
          'onMouseLeave',
          'itemHeight',
          'selectedHighlight',
          'inContainer',
          'infiniteScroll',
          'loadMore',
          'hasMore',
          'markedOption',
        ],
        this.props,
      ),
      inputAdditionalProps,
    );

    const { inputElement } = inputProps;
    return React.cloneElement(inputElement, {
      menuArrow: true,
      ref: input => (this.input = input),
      ...inputProps,
      onKeyDown: chainEventHandlers(
        inputAdditionalProps && inputAdditionalProps.onKeyDown,
      ),
      onChange: this._onChange,
      onInputClicked: this._onInputClicked,
      onFocus: this._onFocus,
      onBlur: this._onBlur,
      onCompositionChange: this.onCompositionChange,
      width: inputElement.props.width,
      textOverflow: this.props.textOverflow || inputElement.props.textOverflow,
      tabIndex: this.props.native ? -1 : 0,
    });
  }

  isDropdownLayoutVisible = () =>
    this.state.showOptions &&
    (this.props.showOptionsIfEmptyInput || this.state.inputValue.length > 0);

  _renderDropdownLayout() {
    const { highlight, value } = this.props;
    const inputOnlyProps = omit(['tabIndex'], Input.propTypes);
    const dropdownProps = Object.assign(
      omit(
        Object.keys(inputOnlyProps).concat(['dataHook', 'onClickOutside']),
        this.props,
      ),
      this.dropdownAdditionalProps(),
    );

    const customStyle = { marginLeft: this.props.dropdownOffsetLeft };

    return (
      <div
        className={`${this.uniqueId} ${this.dropdownClasses()}`}
        style={customStyle}
        data-hook="dropdown-layout-wrapper"
      >
        <HighlightContext.Provider value={{ highlight, match: value }}>
          <DropdownLayout
            ref={dropdownLayout => (this.dropdownLayout = dropdownLayout)}
            {...dropdownProps}
            dataHook="inputwithoptions-dropdownlayout"
            visible
            onClose={this.hideOptions}
            onSelect={this._onSelect}
            isComposing={this.state.isComposing}
            inContainer
            tabIndex={-1}
          />
        </HighlightContext.Provider>
      </div>
    );
  }

  _renderNativeSelect() {
    const { options, onSelect, disabled } = this.props;
    return (
      <div className={classes.nativeSelectWrapper}>
        {this.renderInput()}
        <select
          disabled={disabled}
          data-hook="native-select"
          className={classes.nativeSelect}
          onChange={event => {
            this._onChange(event);

            // In this case we don't use DropdownLayout so we need to invoke `onSelect` manually
            onSelect(options[event.target.selectedIndex]);
          }}
        >
          {options.map((option, index) => (
            <option
              data-hook={`native-option-${option.id}`}
              data-index={index}
              key={option.id}
              value={option.value}
              className={classes.nativeOption}
            >
              {option.value}
            </option>
          ))}
        </select>
      </div>
    );
  }

  render() {
    const {
      native,
      dataHook,
      popoverProps,
      dropDirectionUp,
      dropdownWidth,
    } = this.props;
    const placement = dropDirectionUp ? 'top' : popoverProps.placement;
    const body = popoverProps.appendTo === 'window';
    return !native ? (
      <Popover
        className={classes.root}
        {...DEFAULT_POPOVER_PROPS}
        dynamicWidth={body}
        excludeClass={this.uniqueId}
        {...popoverProps}
        width={dropdownWidth}
        placement={placement}
        dataHook={dataHook}
        onKeyDown={this._onKeyDown}
        onClickOutside={this.onClickOutside}
        shown={this.isDropdownLayoutVisible()}
      >
        <Popover.Element>
          <div data-input-parent className={this.inputClasses()}>
            {this.renderInput()}
          </div>
        </Popover.Element>
        <Popover.Content>{this._renderDropdownLayout()}</Popover.Content>
      </Popover>
    ) : (
      this._renderNativeSelect()
    );
  }

  /**
   * Shows dropdown options
   */
  showOptions() {
    if (!this.state.showOptions) {
      this.setState({ showOptions: true, lastOptionsShow: Date.now() });
      this.props.onOptionsShow && this.props.onOptionsShow();
    }
  }

  /**
   * Hides dropdown options
   */
  hideOptions() {
    if (this.state.showOptions) {
      this.setState({ showOptions: false });
      this.props.onOptionsHide && this.props.onOptionsHide();
      this.props.onClose && this.props.onClose();
    }
  }

  closeOnSelect() {
    return this.props.closeOnSelect;
  }

  get isReadOnly() {
    const { readOnly } = this.inputAdditionalProps() || {};
    return readOnly;
  }

  /**
   * Determine if the provided key should cause the dropdown to be opened.
   *
   * @param {KeyboardEvent.key}
   * @returns {boolean}
   */
  shouldOpenDropdown(key) {
    const openKeys = this.isReadOnly
      ? ['Enter', 'Spacebar', ' ', 'ArrowDown']
      : ['ArrowDown'];

    return openKeys.includes(key);
  }

  /**
   * Determine if the provided key should delegate the keydown event to the
   * DropdownLayout.
   *
   * @param {KeyboardEvent.key}
   * @returns {boolean}
   */
  shouldDelegateKeyDown(key) {
    return this.isReadOnly || !['Spacebar', ' '].includes(key);
  }

  /**
   * Determine if the provided key should cause manual submit.
   *
   * @param {KeyboardEvent.key}
   * @returns {boolean}
   */
  shouldPerformManualSubmit(key) {
    return this.getManualSubmitKeys().includes(key);
  }

  _onManuallyInput(inputValue = '') {
    if (this.state.isComposing) {
      return;
    }

    inputValue = inputValue.trim();

    const suggestedOption = this.props.options.find(
      element => element.value === inputValue,
    );

    if (this.props.onManuallyInput) {
      this.props.onManuallyInput(inputValue, suggestedOption);
    }
  }

  _onSelect(option, isSelectedOption) {
    const { onSelect } = this.props;

    if (this.closeOnSelect() || isSelectedOption) {
      this.hideOptions();
    }

    if (onSelect) {
      onSelect(
        this.props.highlight
          ? this.props.options.find(opt => opt.id === option.id)
          : option,
      );
    }
  }

  _onChange(event) {
    this.setState({ inputValue: event.target.value });

    if (this.props.onChange) {
      this.props.onChange(event);
    }

    // If the input value is not empty, should show the options
    if (event.target.value.trim() && !this.props.native) {
      this.showOptions();
    }
  }

  _onInputClicked(event) {
    if (this.state.showOptions) {
      if (Date.now() - this.state.lastOptionsShow > 2000) {
        this.hideOptions();
      }
    } else {
      this.showOptions();
    }

    if (this.props.onInputClicked) {
      this.props.onInputClicked(event);
    }
  }

  _onFocus(e) {
    /** Don't call onFocus if input is already focused or is disabled
     * can occur when input is re-focused after selecting an option
     */
    if (this._focused || this.props.disabled) {
      return;
    }
    this._focused = true;
    this.setState({ isEditing: false });
    if (this.props.onFocus) {
      this.props.onFocus(e);
    }
  }

  /** Checks if focus event is related to selecting an option */
  _didSelectOption = event => {
    const focusedElement = event && event.relatedTarget;
    const dropdownContainer =
      this.dropdownLayout && this.dropdownLayout.containerRef.current;
    // Check if user has focused other input component
    const isInput = focusedElement instanceof HTMLInputElement;
    if (!focusedElement || !dropdownContainer || isInput) {
      return false;
    }
    const isInDropdown = dropdownContainer.contains(focusedElement);

    // Returns true if element is the dropdown container or is inside of it
    return isInDropdown;
  };

  _onBlur(event) {
    // Don't blur input if selected an option
    const stopBlur = this._didSelectOption(event);
    if (stopBlur) {
      // Restore focus to input element
      this.focus();
      return;
    }

    this._focused = false;
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  }

  _onKeyDown(event) {
    if (this.props.disabled) {
      return;
    }

    const { key } = event;

    /* Enter - prevent a wrapping form from submitting when hitting Enter */
    /* ArrowUp - prevent input's native behaviour from moving the text cursor to the beginning */
    if (key === 'Enter' || key === 'ArrowUp') {
      event.preventDefault();
    }

    if (key !== 'ArrowDown' && key !== 'ArrowUp') {
      this.setState({ isEditing: true });
    }

    if (this.shouldOpenDropdown(key)) {
      this.showOptions();
      event.preventDefault();
    }

    if (this.shouldDelegateKeyDown(key)) {
      // Delegate event and get result

      if (this.dropdownLayout) {
        const eventWasHandled = this.dropdownLayout._onKeyDown(event);
        if (eventWasHandled || this.isReadOnly) {
          return;
        }
      }

      // For editing mode, we want to *submit* only for specific keys.
      if (this.shouldPerformManualSubmit(key)) {
        this._onManuallyInput(this.state.inputValue, event);
        const inputIsEmpty = !event.target.value;

        if (this.closeOnSelect() || (key === 'Tab' && inputIsEmpty)) {
          this.hideOptions();
        }
      }
    }
  }

  /**
   * Sets focus on the input element
   * @param {FocusOptions} options
   */
  focus(options = {}) {
    this.input.focus(options);
  }

  /**
   * Removes focus on the input element
   */
  blur() {
    this.input.blur();
  }

  /**
   * Selects all text in the input element
   */
  select() {
    this.input.select();
  }
}

InputWithOptions.defaultProps = {
  ...Input.defaultProps,
  ...DropdownLayout.defaultProps,
  onSelect: () => {},
  options: [],
  closeOnSelect: true,
  inputElement: <Input />,
  valueParser: DEFAULT_VALUE_PARSER,
  dropdownWidth: null,
  popoverProps: DEFAULT_POPOVER_PROPS,
  dropdownOffsetLeft: '0',
  showOptionsIfEmptyInput: true,
  autocomplete: 'off',
  native: false,
};

InputWithOptions.propTypes = {
  ...Input.propTypes,
  ...DropdownLayout.propTypes,

  /** Use a customized input component instead of the default wix-style-react `<Input/>` component */
  inputElement: PropTypes.element,

  /** Closes DropdownLayout on option selection */
  closeOnSelect: PropTypes.bool,

  /** A callback which is called when the user performs a Submit-Action.
   * Submit-Action triggers are: "Enter", "Tab", [typing any defined delimiters], Paste action.
   * `onManuallyInput(values: Array<string>): void - The array of strings is the result of splitting the input value by the given delimiters */
  onManuallyInput: PropTypes.func,

  /** A callback which is called when options dropdown is shown */
  onOptionsShow: PropTypes.func,

  /** A callback which is called when options dropdown is hidden */
  onOptionsHide: PropTypes.func,

  /** Function that receives an option, and should return the value to be displayed. */
  valueParser: PropTypes.func,

  /** Sets the width of the dropdown */
  dropdownWidth: PropTypes.string,

  /** Sets the offset of the dropdown from the left */
  dropdownOffsetLeft: PropTypes.string,

  /** Controls whether to show options if input is empty */
  showOptionsIfEmptyInput: PropTypes.bool,

  /** Mark in bold word parts based on search pattern */
  highlight: PropTypes.bool,

  /** Indicates whether to render using the native select element */
  native: PropTypes.bool,

  /** common popover props */
  popoverProps: PropTypes.shape({
    appendTo: PropTypes.oneOf(['window', 'scrollParent', 'parent', 'viewport']),
    maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    minWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    flip: PropTypes.bool,
    fixed: PropTypes.bool,
    placement: PropTypes.oneOf([
      'auto-start',
      'auto',
      'auto-end',
      'top-start',
      'top',
      'top-end',
      'right-start',
      'right',
      'right-end',
      'bottom-end',
      'bottom',
      'bottom-start',
      'left-end',
      'left',
      'left-start',
    ]),
    dynamicWidth: PropTypes.bool,
  }),
};

InputWithOptions.displayName = 'InputWithOptions';

export default InputWithOptions;
