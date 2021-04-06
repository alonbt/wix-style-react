import React from 'react';
import omit from 'omit';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import { st, classes } from './NoBorderInput.st.css';
import Text from '../Text';
import dataHooks from './dataHooks';
import { FontUpgradeContext } from '../FontUpgrade/context';
import deprecationLog from '../utils/deprecationLog';

class NoBorderInput extends React.Component {
  static StatusError = Input.StatusError;

  constructor(props) {
    super(props);
    this.state = {
      focus: !!props.autoFocus,
    };

    deprecationLog(
      '<NoBorderInput/> is deprecated and will be removed next version. Please use <Input border="bottomLine"/> instead',
    );
  }

  render() {
    const {
      id,
      size,
      dataHook,
      label,
      disabled,
      onFocus,
      onBlur,
      status,
      statusMessage,
      className,
      value,
    } = this.props;

    const rejectedProps = [
      'prefix',
      'className',
      'statusMessage',
      'roundInput',
      'noLeftBorderRadius',
      'noRightBorderRadius',
    ];
    const wsrInputProps = omit(rejectedProps, this.props);

    const hasValue = Boolean(
      (value && value.length) ||
        (this.wsrInput && this.wsrInput.input && !!this.wsrInput.input.value),
    );
    const renderStatusLine = () =>
      !disabled &&
      status &&
      statusMessage && (
        <Text
          dataHook={dataHooks.statusMessage}
          className={classes.statusMessage}
          size="tiny"
          weight="thin"
          skin="error"
        >
          {statusMessage}
        </Text>
      );

    return (
      <FontUpgradeContext.Consumer>
        {({ active: isMadefor }) => (
          <div
            className={st(
              classes.root,
              {
                isMadefor,
                size,
                focus: this.state.focus,
                hasValue,
                noLabel: !label,
                status,
                disabled,
              },
              className,
            )}
            data-hook={dataHook}
            data-status={status}
          >
            <Text
              tagName="label"
              dataHook={dataHooks.label}
              className={classes.label}
              htmlFor={id}
              size="medium"
              weight={isMadefor ? 'thin' : 'normal'}
              light
              secondary
              ellipsis
              showTooltip={false}
              skin={disabled ? 'disabled' : 'standard'}
            >
              {label}
            </Text>
            <Input
              {...wsrInputProps}
              ref={wsrInput => (this.wsrInput = wsrInput)}
              onFocus={e => {
                this.setState({ focus: true });
                if (typeof onFocus === 'function') {
                  onFocus(e);
                }
              }}
              onBlur={e => {
                this.setState({ focus: false });
                if (typeof onBlur === 'function') {
                  onBlur(e);
                }
              }}
            />
            <div className={classes.border} />
            {renderStatusLine()}
          </div>
        )}
      </FontUpgradeContext.Consumer>
    );
  }
}

NoBorderInput.displayName = 'NoBorderInput';

NoBorderInput.defaultProps = {
  autoSelect: true,
  size: 'medium',
  statusMessage: '',
  textOverflow: 'clip',
  maxLength: 524288,
};

NoBorderInput.propTypes = {
  /** The label displayed above the input when focused and as the input text when there is none */
  label: PropTypes.string,
  ...Input.propTypes,
  /** Input status - use to display an status indication for the user. for example: 'error' */
  status: PropTypes.oneOf([NoBorderInput.StatusError]),
};

export default NoBorderInput;
