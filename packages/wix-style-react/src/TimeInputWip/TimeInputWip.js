import React from 'react';
import PropTypes from 'prop-types';

import Input from '../Input';
import DropdownBase from '../DropdownBase';
import { dataHooks } from './constants';
import { st, classes } from './TimeInputWip.st.css';

/** A WIP time input component */
class TimeInputWip extends React.PureComponent {
  constructor(props) {
    super(props);
    const { hour12, timeZone, numberingSystem, timeStyle, value, step } = props;
    const dateFormatter = new Intl.DateTimeFormat('default', {
      hour12,
      timeZone,
      numberingSystem,
      timeStyle,
    });

    this.state = {
      inputValue: value ? this._getFormattedDate(value, dateFormatter) : '',
      isDropdownOpen: false,
      options: this._getOptions(value, step, dateFormatter),
      selectedId: value ? value.getTime() : undefined,
    };
  }

  _getFormattedDate = (date, dateFormatter) => {
    return dateFormatter
      .formatToParts(date)
      .map(({ type, value }) => {
        switch (type) {
          case 'dayPeriod':
            return value.toLocaleUpperCase();
          default:
            return value;
        }
      })
      .reduce((string, part) => string + part);
  };

  _getOptions = (date = new Date(), step, dateFormatter) => {
    const minuteMs = 60000;
    const stepMs = step > 60 ? 60 * minuteMs : step * minuteMs;
    const startOfTheDay = date.setHours(0, 0, 0, 0);
    const endOfTheDay = date.setHours(23, 59, 59, 999);
    const timeLabels = [];

    for (let i = startOfTheDay; i <= endOfTheDay; i += stepMs) {
      timeLabels.push({
        id: i,
        value: this._getFormattedDate(i, dateFormatter),
      });
    }

    return timeLabels;
  };

  _onChange = e => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  _onKeyDown = (e, delegateKeyDown) => {
    const eventWasHandled = delegateKeyDown(e);
    if (!eventWasHandled && e.key === 'ArrowDown') {
      this._setDropdownOpen();
      e.preventDefault();
      return;
    }

    if (e.key === 'Escape') {
      this._setDropdownClosed();
      e.preventDefault();
    }
  };

  _onSelect = option => {
    const { onChange } = this.props;
    this.setState({
      inputValue: option.value,
      selectedId: option.id,
      isDropdownOpen: false,
    });
    onChange &&
      onChange({ date: new Date(option.id), formattedDate: option.value });
  };

  _setDropdownOpen = () => {
    this.setState({
      isDropdownOpen: true,
    });
  };

  _setDropdownClosed = () => {
    this.setState({ isDropdownOpen: false });
  };

  render() {
    const {
      dataHook,
      className,
      size,
      suffix,
      prefix,
      status,
      statusMessage,
      border,
      disabled,
      placeholder,
      width,
    } = this.props;
    const { isDropdownOpen, options, selectedId, inputValue } = this.state;

    return (
      <div className={st(classes.root, className)} style={{ width }}>
        <DropdownBase
          dataHook={dataHook}
          open={isDropdownOpen}
          onClickOutside={this._setDropdownClosed}
          options={options}
          onSelect={this._onSelect}
          selectedId={selectedId}
          focusOnSelectedOption
        >
          {({ delegateKeyDown }) => {
            return (
              <Input
                dataHook={dataHooks.timeInputWipInput}
                size={size}
                suffix={suffix}
                prefix={prefix}
                status={status}
                statusMessage={statusMessage}
                border={border}
                disabled={disabled}
                placeholder={placeholder}
                value={inputValue}
                onChange={this._onChange}
                onInputClicked={this._setDropdownOpen}
                onKeyDown={e => this._onKeyDown(e, delegateKeyDown)}
              />
            );
          }}
        </DropdownBase>
      </div>
    );
  }
}

TimeInputWip.displayName = 'TimeInputWip';

TimeInputWip.propTypes = {
  /** Border type */
  border: PropTypes.oneOf(['standard', 'round', 'bottomLine']),

  /** A single CSS class name to be appended to the root element. */
  className: PropTypes.string,

  /** Applied as data-hook HTML attribute that can be used for testing purposes */
  dataHook: PropTypes.string,

  /** when set to true this component is disabled */
  disabled: PropTypes.bool,

  /** Whether to use 12-hour time (as opposed to 24-hour time). Possible values are true and false.
   * The default is locale dependent. */
  hour12: PropTypes.bool,

  /** A numeral system used by the locale */
  numberingSystem: PropTypes.string,

  /** A callback function to be called when the time has changed
   * `(date: Date | number, formattedDate: string): void` */
  onChange: PropTypes.func,

  /** Placeholder to display */
  placeholder: PropTypes.string,

  /** Component you want to show as the prefix of the input */
  prefix: PropTypes.node,

  /** Specifies the size of the input */
  size: PropTypes.oneOf(['small', 'medium', 'large']),

  /** Sets UI to indicate a status */
  status: PropTypes.oneOf(['error', 'warning', 'loading']),

  /** The status message to display when hovering the status icon, if not given or empty there will be no tooltip */
  statusMessage: PropTypes.node,

  step: PropTypes.number,

  /** Component you want to show as the suffix of the input */
  suffix: PropTypes.node,

  /** The time formatting style to use when calling format(). Possible values include:
   * "full"
   * "long"
   * "medium"
   * "short" (default) */
  timeStyle: PropTypes.string,

  /** The time zone to use. The only value implementations must recognize is "UTC";
   * the default is the runtime's default time zone.
   * Implementations may also recognize the time zone names of the IANA time zone database,
   * such as "Asia/Shanghai", "Asia/Kolkata", "America/New_York". */
  timeZone: PropTypes.string,

  value: PropTypes.object,

  /** The input width behavior, as 'auto' it will shrink, at '100%' it will grow */
  width: PropTypes.oneOf(['auto', '100%']),
};

TimeInputWip.defaultProps = {
  width: 'auto',
  step: 15,
  timeStyle: 'short',
};

export default TimeInputWip;
