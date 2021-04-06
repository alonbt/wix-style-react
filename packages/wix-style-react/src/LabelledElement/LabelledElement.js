import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';
import { st, classes } from './LabelledElement.st.css';
import { FontUpgradeContext } from '../FontUpgrade/context';
import DataHooks from './dataHooks';
import { generateID } from '../utils/generateId';

class LabelledElement extends React.Component {
  static displayName = 'LabelledElement';

  static propTypes = {
    /** Specifies a data-hook for tests */
    dataHook: PropTypes.string,
    /** Content of rendered label */
    label: PropTypes.string,
    /** Value of rendered child input */
    value: PropTypes.string,
  };

  state = {
    hasFocus: false,
    inputId: `labelled-element-${generateID()}`,
    value: undefined,
  };

  _isInputEmpty = () => {
    return this._isInputControlled() ? !this.props.value : !this.state.value;
  };

  _isInputControlled = () => typeof this.props.value !== 'undefined';

  _handleFocus = event => {
    const { children } = this.props;
    const childrenOnFocus = children && children.props.onFocus;
    this.setState({ hasFocus: true });
    childrenOnFocus && childrenOnFocus(event);
  };

  _handleBlur = event => {
    const { children } = this.props;
    const childrenOnBlur = children && children.props.onBlur;
    this.setState({
      hasFocus: false,
    });
    childrenOnBlur && childrenOnBlur(event);
  };

  _handleOnChange = event => {
    const { children } = this.props;
    const childrenOnChange = children && children.props.onChange;

    if (!this._isInputControlled()) {
      this.setState({
        value: event.target.value,
      });
    }

    childrenOnChange && childrenOnChange(event);
  };

  _placeLabelOnTop = () => this.state.hasFocus || !this._isInputEmpty();

  _getPlaceholder = placeholder => (this._placeLabelOnTop() ? placeholder : '');

  render() {
    const { inputId } = this.state;
    const { dataHook, label, children } = this.props;
    const labelTop = this._placeLabelOnTop();

    return (
      <FontUpgradeContext.Consumer>
        {({ active: isMadefor }) => (
          <div className={classes.root} data-hook={dataHook}>
            <label
              data-hook={DataHooks.label}
              data-top={labelTop}
              htmlFor={inputId}
              className={st(classes.label, {
                labelTop,
              })}
            >
              <Text
                size="medium"
                light={!labelTop}
                secondary={!labelTop}
                weight={isMadefor ? 'thin' : 'normal'}
                className={classes.labelText}
              >
                {label}
              </Text>
            </label>
            {children && (
              <div data-hook={DataHooks.childrenWrapper}>
                {React.cloneElement(children, {
                  id: inputId,
                  onFocus: this._handleFocus,
                  onBlur: this._handleBlur,
                  onChange: this._handleOnChange,
                  /** should have a different height than regular large input */
                  className: classes.inputContainer,
                  placeholder: children.props.placeholder
                    ? this._getPlaceholder(children.props.placeholder)
                    : undefined,
                })}
              </div>
            )}
          </div>
        )}
      </FontUpgradeContext.Consumer>
    );
  }
}

export default LabelledElement;
