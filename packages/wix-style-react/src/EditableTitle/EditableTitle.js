import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Heading from '../Heading';
import Input from '../Input/Input';
import styles from './EditableTitle.scss';

const DEFAULT_MAX_LENGTH = 100;

class EditableTitle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      focus: false,
      value: props.initialValue || '',
    };
  }

  componentDidMount() {
    if (this.props.autoFocus) this.onFocus();
  }

  onChange = e => {
    this.setState({ value: e.target.value });
  };

  showPlaceholder = () => !this.state.value && this.props.defaultValue;

  onFocus = () => {
    const value = this.state.value || this.props.defaultValue;
    const selectAll = !this.state.focus;

    this.setState({ focus: true, value }, () => {
      this.wsrInput.focus();
      selectAll && this.wsrInput.select();
    });
  };
  render() {
    const { dataHook, className, maxLength } = this.props;

    const conditionalClasses = {
      [styles.hasFocus]: this.state.focus,
    };

    return (
      <div
        className={classNames(conditionalClasses, styles.root, className)}
        data-hook={dataHook}
        tabIndex={0}
        onFocus={this.onFocus}
        onClick={this.onFocus}
      >
        <div
          data-hook="heading"
          className={classNames(
            {
              [styles.headerIsRenaming]:
                this.state.focus && !this.showPlaceholder(),
              [styles.placeholder]: this.showPlaceholder(),
            },
            styles.heading,
          )}
        >
          <Heading ellipsis>
            {this.state.value || this.props.defaultValue}
          </Heading>
        </div>
        <div
          className={classNames({
            [styles.activationIndicatorHasFocus]: this.state.focus,
            [styles.activationIndicator]: !this.state.focus,
          })}
        >
          {this.state.value || this.props.defaultValue}
        </div>
        <div
          className={classNames({
            [styles.renamingInput]: this.state.focus,
            [styles.hiddenInput]: !this.state.focus,
          })}
          style={{ position: 'absolute', zIndex: 1, width: '100%' }}
          data-hook="renaming-field"
          onFocus={e =>
            // input does not pass his event so we need to catch it
            e.stopPropagation()
          }
        >
          <Input
            autoSelect={false}
            className={styles.nbinput}
            textOverflow="clip"
            maxLength={maxLength || DEFAULT_MAX_LENGTH}
            onChange={this.onChange}
            value={this.state.value}
            ref={wsrInput => (this.wsrInput = wsrInput)}
            onBlur={this.onValueSubmission}
            onEnterPressed={this.onEnterPressed}
          />
        </div>
      </div>
    );
  }

  onEnterPressed = () => {
    this.wsrInput.blur();
  };

  onValueSubmission = () => {
    const value = this.state.value || this.props.defaultValue;
    this.setState({ value, focus: false }, () => {
      if (typeof this.props.onSubmit === 'function') {
        this.props.onSubmit(value);
      }
    });
  };
}

EditableTitle.displayName = 'EditableTitle';

EditableTitle.defaultProps = {
  defaultValue: '',
};

EditableTitle.propTypes = {
  /** Value - initial value to display */
  initialValue: PropTypes.string,
  /** default - value to display when empty, when clicked the input gets this value */
  defaultValue: PropTypes.string,
  /** onSubmit - invoked when done editing */
  onSubmit: PropTypes.func,
  /** length - maximum chars the input can get  */
  maxLength: PropTypes.number,
  /** autoFocus - focus element on mount  */
  autoFocus: PropTypes.bool,
};

export default EditableTitle;
