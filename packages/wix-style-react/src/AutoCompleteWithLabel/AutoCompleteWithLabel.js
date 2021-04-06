import React from 'react';
import PropTypes from 'prop-types';
import StatusAlertSmall from 'wix-ui-icons-common/StatusAlertSmall';

import Input from '../Input';
import LabelledElement from '../LabelledElement';
import Text from '../Text';

import InputWithOptions from '../InputWithOptions';
import { classes } from './AutoCompleteWithLabel.st.css';

import dataHooks from './dataHooks';
import { optionValidator } from '../DropdownLayout/DropdownLayout';

class AutoCompleteWithLabel extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value || '',
      isEditing: false,
    };
  }

  static displayName = 'AutoCompleteWithLabel';

  static propTypes = {
    /** Applied as data-hook HTML attribute that can be used to create driver in testing */
    dataHook: PropTypes.string,
    /** label to appear in input */
    label: PropTypes.string.isRequired,
    /** options to appear in dropdown */
    options: PropTypes.arrayOf(optionValidator).isRequired,
    /** add suffix to input */
    suffix: PropTypes.arrayOf(PropTypes.element),
    /** input status - error, warning or loading */
    status: PropTypes.oneOf(['error', 'warning', 'loading']),
    /** JSX element that appears upon error */
    statusMessage: PropTypes.node,
    /** Standard input onFocus callback */
    onFocus: PropTypes.func,
    /** Standard input onBlur callback */
    onBlur: PropTypes.func,
    /** Standard input onChange callback */
    onChange: PropTypes.func,
    /** Used to reference element data when a form is submitted. */
    name: PropTypes.string,
    /** Specifies the type of <input> element to display.default is text. */
    type: PropTypes.string,
    /** Used to define a string that labels the current element in case where a text label is not visible on the screen. */
    ariaLabel: PropTypes.string,
    /** Standard React Input autoFocus (focus the element on mount) */
    autoFocus: PropTypes.bool,
    /** Sets value of autocomplete attribute (consult the [HTML spec](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-autocomplete) for possible values  */
    autocomplete: PropTypes.string,
    /** when set to true this component is disabled */
    disabled: PropTypes.bool,
    /** A single CSS class name to be passed to the Input element. */
    className: PropTypes.string,
    /** Input max length */
    maxLength: PropTypes.number,
    /** Placeholder to display */
    placeholder: PropTypes.string,
    /** Callback function called whenever the user selects a different option in the list */
    onSelect: PropTypes.func,
    /** Indicates whether to render using the native select element */
    native: PropTypes.bool,
    /** Value of rendered child input */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** Set the max height of the dropdownLayout in pixels */
    maxHeightPixels: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };

  static defaultProps = {
    ...Input.defaultProps,
    label: '',
    options: [],
  };

  onSelect = option => {
    const { value } = option;
    this.setState({
      value,
    });
    this.props.onSelect(option);
    this.setState({ isEditing: false });
  };

  onChange = event => {
    const { value } = event.target;
    this.setState({ value, isEditing: true });
    this.props.onChange && this.props.onChange(event);
  };

  _isInputControlled = () => typeof this.props.value !== 'undefined';

  render() {
    const {
      label,
      dataHook,
      options,
      status,
      suffix,
      statusMessage,
      onFocus,
      name,
      type,
      ariaLabel,
      autoFocus,
      autocomplete,
      disabled,
      className,
      maxLength,
      placeholder,
      native,
      onBlur,
      maxHeightPixels,
    } = this.props;
    const { value } = this._isInputControlled() ? this.props : this.state;
    const predicate = this.state.isEditing
      ? option => option.value.toLowerCase().includes(value.toLowerCase())
      : () => true;
    const filteredOptions = options.filter(predicate);

    const suffixContainer = suffix
      ? suffix.map((item, index) => {
          return <div key={`${dataHook}-${index}`}>{item}</div>;
        })
      : [];

    return (
      <div data-hook={dataHook}>
        <LabelledElement
          label={label}
          dataHook={dataHooks.labelledElement}
          value={value}
        >
          <InputWithOptions
            onChange={this.onChange}
            onSelect={this.onSelect}
            dataHook={dataHooks.inputWithOptions}
            hideStatusSuffix
            onFocus={onFocus}
            onBlur={onBlur}
            size={'large'}
            inputElement={
              <Input
                name={name}
                type={type}
                ariaLabel={ariaLabel}
                autoFocus={autoFocus}
                autocomplete={autocomplete}
                disabled={disabled}
                maxLength={maxLength}
                placeholder={placeholder}
                dataHook={dataHooks.inputWithLabel}
                value={value}
                className={className}
                suffix={suffixContainer}
                status={status}
              />
            }
            options={filteredOptions}
            native={native}
            maxHeightPixels={maxHeightPixels}
          />
        </LabelledElement>
        {status === Input.StatusError && statusMessage && (
          <Text
            skin="error"
            weight="normal"
            size="small"
            className={classes.statusMessage}
          >
            <span className={classes.statusMessageIcon}>
              <StatusAlertSmall />
            </span>
            <span
              data-hook={dataHooks.errorMessage}
              className={classes.errorMessageContent}
            >
              {statusMessage}
            </span>
          </Text>
        )}
      </div>
    );
  }
}

export default AutoCompleteWithLabel;
