import React from 'react';
import PropTypes from 'prop-types';
import InputWithOptions from '../InputWithOptions';
import SearchIcon from 'wix-ui-icons-common/Search';
import Input from '../Input';
import Box from '../Box';
import Loader from '../Loader';
import Text from '../Text';
import { dataHooks } from './constants';

/** AddressInput */
class AddressInput extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: props.initialValue || '',
      isDropdownOpen: false,
    };
  }

  _onChange = event => {
    const { onChange } = this.props;

    this.setState({
      inputValue: event.target.value,
    });
    if (onChange) {
      onChange(event);
    }
  };

  _onSelect = option => {
    const { onSelect } = this.props;
    this.setState({
      inputValue: option.label,
    });
    onSelect && onSelect(option);
  };

  _onClear = () => {
    const { onClear } = this.props;
    this.setState(
      {
        inputValue: '',
      },
      () => {
        onClear && onClear();
      },
    );
  };

  _getInputValue = () => {
    const { value: controlledValue } = this.props;
    const { inputValue } = this.state;

    const value = controlledValue !== undefined ? controlledValue : inputValue;
    return value;
  };

  _getIsLoading = () => {
    const { status } = this.props;
    return status === 'loading';
  };

  _getStatus = () => {
    const { status } = this.props;
    const { isDropdownOpen } = this.state;
    const isLoading = this._getIsLoading();
    /** If addresses are loading and dropdown is open,
     * displays loader in dropdown instead of in input.
     */
    if (isLoading && isDropdownOpen) {
      return undefined;
    }
    return status;
  };

  _setDropdownOpen = () => this.setState({ isDropdownOpen: true });

  _setDropdownClosed = () => this.setState({ isDropdownOpen: false });

  _renderLoadingOption = () => {
    return {
      id: '',
      disabled: true,
      value: () => (
        <Box flex={1} align="center" padding="3px">
          <Loader size="tiny" dataHook={dataHooks.loader} />
        </Box>
      ),
    };
  };

  _renderNoResultsOption = () => {
    const { noResultsText } = this.props;
    const isString = typeof noResultsText === 'string';
    const value = isString ? (
      <Text light secondary dataHook={dataHooks.noResultsText}>
        {noResultsText}
      </Text>
    ) : (
      noResultsText
    );

    return {
      id: '',
      disabled: true,
      overrideOptionStyle: !isString,
      value,
    };
  };

  _renderOptions = () => {
    const { options, noResultsText } = this.props;
    const value = this._getInputValue();
    const isLoading = this._getIsLoading();
    const noResultsFound = !options || options.length === 0;

    if (isLoading) {
      return [this._renderLoadingOption()];
    }
    /** show `noResultsText` option
     * if the input is not empty and there are no results */
    if (value && noResultsFound && noResultsText) {
      return [this._renderNoResultsOption()];
    }

    return options;
  };

  render() {
    const {
      dataHook,
      className,
      size,
      clearButton,
      placeholder,
      disabled,
      onBlur,
      statusMessage,
      border,
      onManuallyInput,
    } = this.props;
    const value = this._getInputValue();
    const status = this._getStatus();

    return (
      <InputWithOptions
        dataHook={dataHook}
        className={className}
        clearButton={clearButton}
        onChange={this._onChange}
        size={size}
        options={this._renderOptions()}
        onSelect={this._onSelect}
        onManuallyInput={onManuallyInput}
        value={value}
        disabled={disabled}
        border={border}
        /** <Input /> always shows clear button when `onClear` prop is passed,
        so we only pass handler when clearButton is `true` */
        onClear={clearButton ? this._onClear : undefined}
        onBlur={onBlur}
        status={status}
        statusMessage={statusMessage}
        menuArrow={false}
        highlight
        prefix={
          <Input.IconAffix>
            <SearchIcon />
          </Input.IconAffix>
        }
        placeholder={placeholder}
        onOptionsShow={this._setDropdownOpen}
        onOptionsHide={this._setDropdownClosed}
        // disable browser autofill (including in chrome)
        autocomplete="off,chrome-off"
      />
    );
  }
}

AddressInput.displayName = 'AddressInput';

AddressInput.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,

  /** Displays clear button (X) on a non-empty input */
  clearButton: PropTypes.bool,

  /** The initial input value */
  initialValue: PropTypes.string,

  /** Controlled mode - value to display */
  value: PropTypes.string,

  /** When set to true this component is disabled */
  disabled: PropTypes.bool,

  /** Handler for address selection changes */
  onSelect: PropTypes.func,

  /** Handler for input changes */
  onChange: PropTypes.func,

  /** The list of options to render. When the option is an {optionProps}, the <AddressInput.Option/> component will be rendered on behalf of the user. */
  options: PropTypes.array,

  /** Handler for getting notified upon a clear event, will show the clear button in the component input when passed. */
  onClear: PropTypes.func,

  /** Handler for input blur */
  onBlur: PropTypes.func,

  /** A callback which is called when the user performs a Submit-Action.
   * Submit-Action triggers are: "Enter", "Tab" */
  onManuallyInput: PropTypes.func,

  /** Shows a status indication, will mostly be used for “loading” indication upon async request calls. */
  status: PropTypes.oneOf(['loading', 'error', 'warning']),

  /** The status message to display when hovering the status icon, if not given or empty there will be no tooltip */
  statusMessage: PropTypes.node,

  /** Border type */
  border: PropTypes.oneOf(['standard', 'round', 'bottomLine']),

  /** Specifies the size of the input */
  size: PropTypes.oneOf(['small', 'medium', 'large']),

  /** Placeholder to display */
  placeholder: PropTypes.string,

  /** Text to show in dropdown when no results found */
  noResultsText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

AddressInput.defaultProps = {
  clearButton: true,
  debounceDuration: 200,
  border: 'round',
  optionsLayout: 'single-line',
  showOptionsIcons: true,
  size: 'medium',
};

export default AddressInput;
