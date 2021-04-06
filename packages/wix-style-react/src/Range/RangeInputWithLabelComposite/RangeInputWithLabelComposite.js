import React, { Children, PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './RangeInputWithLabelComposite.scss';
import classNames from 'classnames';
import FieldLabelAttributes from '../../FieldLabelAttributes/FieldLabelAttributes';
import { DATA_HOOKS } from '../constants';

class RangeInputWithLabelComposite extends PureComponent {
  state = {
    hasFocusFirst: false,
    hasFocusLast: false,
  };

  _doKeyDown(e) {
    const keys = {
      upArrow: 38,
      downArrow: 40,
    };
    if (e.keyCode === keys.upArrow && !isNaN(e.target.value)) {
      e.preventDefault();
      e.target.value++;
    }
    if (e.keyCode === keys.downArrow && !isNaN(e.target.value)) {
      e.preventDefault();
      e.target.value--;
    }
  }

  _handleFocusFirst() {
    this.setState({ hasFocusFirst: true });
  }

  _handleBlurFirst() {
    this.setState({ hasFocusFirst: false });
  }

  _handleFocusLast() {
    this.setState({ hasFocusLast: true });
  }

  _handleBlurLast() {
    this.setState({ hasFocusLast: false });
  }

  render() {
    const { children, dataHook } = this.props;
    const { hasFocusFirst, hasFocusLast } = this.state;

    const childrenArr = Children.toArray(children);
    const rangeType = children[1].type.displayName;
    const label =
      children.length === 3 ? (
        <div className={styles.label} data-hook={DATA_HOOKS.label}>
          {children[0]}
          {this.props.required || this.props.info || this.props.tooltip ? (
            <FieldLabelAttributes
              dataHook="field-label-attributes"
              required={this.props.required}
              info={this.props.info}
              tooltip={this.props.tooltip}
              appendToParent={this.props.appendToParent}
            />
          ) : null}
        </div>
      ) : null;

    const firstInput =
      childrenArr.length === 3 ? childrenArr[1] : childrenArr[0];
    const lastInput =
      childrenArr.length === 3 ? childrenArr[2] : childrenArr[1];

    const additionalFirstInputProps = {
      className:
        rangeType === 'DatePicker' ? styles.firstDate : styles.firstinput,
      noRightBorderRadius: true,
      onKeyDown: e => this._doKeyDown(e),
      onFocus: e => this._handleFocusFirst(e),
      onBlur: e => this._handleBlurFirst(e),
      ...(rangeType === 'DatePicker' &&
        !!firstInput.props.inputProps &&
        firstInput.props.inputProps),
    };

    const additionalLastInputProps = {
      className:
        rangeType === 'DatePicker' ? styles.lastDate : styles.lastinput,
      noLeftBorderRadius: true,
      onKeyDown: e => this._doKeyDown(e),
      onFocus: e => this._handleFocusLast(e),
      onBlur: e => this._handleBlurLast(e),
      ...(rangeType === 'DatePicker' &&
        !!lastInput.props.inputProps &&
        lastInput.props.inputProps),
    };

    const inputWrapperClassNames = classNames({
      [styles.hasFocusFirst]: hasFocusFirst,
      [styles.hasFocusLast]: hasFocusLast,
      [styles.inputs]: true,
    });

    return (
      <div data-hook={dataHook}>
        {label}
        <div
          className={inputWrapperClassNames}
          data-hook={DATA_HOOKS.inputWrapper}
        >
          {React.cloneElement(
            firstInput,
            rangeType === 'DatePicker'
              ? { inputProps: additionalFirstInputProps }
              : additionalFirstInputProps,
          )}
          {React.cloneElement(
            lastInput,
            rangeType === 'DatePicker'
              ? { inputProps: additionalLastInputProps }
              : additionalLastInputProps,
          )}
        </div>
      </div>
    );
  }
}

RangeInputWithLabelComposite.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,
  /** Range type can be either `<DatePicker/>` or `< Input/>`*/
  children: PropTypes.any,
  /** @deprecated Do not use this prop */
  required: PropTypes.bool,
  /** @deprecated Do not use this prop */
  info: PropTypes.string,
  /** @deprecated Do not use this prop */
  appendToParent: PropTypes.bool,
};

RangeInputWithLabelComposite.defaultProps = {
  appendToParent: false,
};

RangeInputWithLabelComposite.displayName = 'RangeInputWithLabelComposite';

export default RangeInputWithLabelComposite;
