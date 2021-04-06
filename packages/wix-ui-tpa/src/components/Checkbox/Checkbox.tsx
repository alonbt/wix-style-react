import * as React from 'react';
import classnames from 'classnames';
import { Checkbox as CoreCheckbox } from 'wix-ui-core/checkbox';
import CheckboxChecked from 'wix-ui-icons-common/system/CheckboxChecked';
import CheckboxIndeterminate from 'wix-ui-icons-common/system/CheckboxIndeterminate';
import { CHECKBOX_DATA_HOOKS, CHEKCBOX_DATA_KEYS } from './dataHooks';
import { TPAComponentProps } from '../../types';
import { st, classes } from './Checkbox.st.css';

interface OnChangeEvent extends React.ChangeEvent<HTMLInputElement> {
  checked: boolean;
}

export enum CheckboxTheme {
  Default = 'default',
  Box = 'box',
}

export interface CheckboxState {
  focused: boolean;
}

export interface CheckboxProps extends TPAComponentProps {
  onChange(event: OnChangeEvent): void;
  label: React.ReactNode | string;
  checked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  error?: boolean;
  name?: string;
  theme?: CheckboxTheme;
  withFocusRing?: boolean;
  suffix?: React.ReactNode | string;
}

interface DefaultProps {
  checked: boolean;
  disabled: boolean;
  label: string;
  error: false;
  indeterminate: boolean;
  theme: CheckboxTheme;
  'data-hook': string;
  withFocusRing: boolean;
}

/** An implementation of Checkbox for TPAs */
export class Checkbox extends React.Component<CheckboxProps, CheckboxState> {
  static displayName = 'Checkbox';
  static defaultProps: DefaultProps = {
    checked: false,
    disabled: false,
    label: '',
    error: false,
    indeterminate: false,
    theme: CheckboxTheme.Default,
    'data-hook': CHECKBOX_DATA_HOOKS.CheckboxWrapper,
    withFocusRing: false,
  };

  state = {
    focused: false,
  };

  getDataAttributes() {
    const { disabled, error, indeterminate, checked } = this.props;
    const { focused } = this.state;

    return {
      [CHEKCBOX_DATA_KEYS.Disabled]: disabled,
      [CHEKCBOX_DATA_KEYS.Error]: error,
      [CHEKCBOX_DATA_KEYS.Indeterminate]: indeterminate,
      [CHEKCBOX_DATA_KEYS.Checked]: checked,
      [CHEKCBOX_DATA_KEYS.Focused]: focused,
    };
  }

  _renderIcon = (isFocused: boolean) => {
    const { checked, indeterminate, error } = this.props;

    return (
      <span
        className={classnames(classes.icon, {
          [classes.focused]: isFocused,
        })}
        data-hook={CHECKBOX_DATA_HOOKS.IconWrapper}
      >
        {checked && !error ? (
          <CheckboxChecked />
        ) : indeterminate && !error ? (
          <CheckboxIndeterminate />
        ) : (
          ''
        )}
      </span>
    );
  };

  _onFocus = () => {
    this.setState({ focused: true });
  };

  _onBlur = () => {
    this.setState({ focused: false });
  };

  render() {
    const {
      theme,
      checked,
      disabled,
      label,
      error,
      indeterminate,
      onChange,
      name,
      suffix,
      className,
      withFocusRing,
    } = this.props;
    const { mobile: isMobile } = this.context;

    const focusedBox =
      !isMobile &&
      withFocusRing &&
      this.state.focused &&
      theme === CheckboxTheme.Box;

    const focusedIcon =
      !isMobile &&
      withFocusRing &&
      this.state.focused &&
      theme === CheckboxTheme.Default;

    const iconContent = this._renderIcon(focusedIcon);

    return (
      <div
        className={st(
          classes.root,
          { box: theme === 'box', checked, disabled, error },
          focusedBox ? classes.focused : '',
          className,
        )}
        data-hook={this.props['data-hook']}
        {...this.getDataAttributes()}
      >
        <CoreCheckbox
          className={classes.core}
          checkedIcon={iconContent}
          uncheckedIcon={iconContent}
          indeterminateIcon={iconContent}
          indeterminate={indeterminate}
          checked={checked}
          onChange={onChange}
          name={name}
          disabled={disabled}
          onFocusByKeyboard={this._onFocus}
          onBlur={this._onBlur}
        >
          <div
            data-hook={CHECKBOX_DATA_HOOKS.LabelWrapper}
            className={classnames(classes.label, {
              [classes.suffixed]: !!suffix,
            })}
          >
            {label}
          </div>
          {suffix && (
            <div className={`${classes.label} ${classes.suffix}`}>{suffix}</div>
          )}
        </CoreCheckbox>
      </div>
    );
  }
}
