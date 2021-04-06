import * as React from 'react';
import classnames from 'classnames';
import { st, classes } from './TextArea.st.css';
import { TEXT_AREA_DATA_HOOK, TEXT_AREA_ERROR_DATA_HOOK } from './dataHooks';
import { Tooltip } from '../Tooltip';
import { ReactComponent as ErrorIcon } from '../../assets/icons/Error.svg';
import {
  TEXT_AREA_DISABLED,
  TEXT_AREA_ERROR,
  TEXT_AREA_SUCCESS,
  TEXT_AREA_THEME,
  TEXT_AREA_FOCUS,
} from './dataKeys';
import { TooltipSkin } from '../Tooltip/TooltipEnums';
import { TextAreaTheme } from './TextAreaEnums';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';
import { TPAComponentProps } from '../../types';

export interface TextAreaProps extends TPAComponentProps {
  value: string;
  id?: string;
  error?: boolean;
  success?: boolean;
  ariaLabel: string;
  disabled?: boolean;
  placeholder?: string;
  /** Possible values: 'line', 'box' */
  theme?: TextAreaTheme;
  errorDescription?: string;
  autoFocus?: boolean;
  onChange(event: React.ChangeEvent<HTMLTextAreaElement>): void;
  onBlur?(): void;
  maxLength?: number;
  withFocusRing?: boolean;
}

interface DefaultProps {
  error: boolean;
  success: boolean;
  disabled: boolean;
  placeholder: string;
  theme: TextAreaTheme;
  errorDescription: string;
  withFocusRing: boolean;
}

export interface TextAreaState {
  focused: boolean;
}

/** TextArea component */
export class TextArea extends React.Component<TextAreaProps, TextAreaState> {
  static displayName = 'TextArea';
  static defaultProps: DefaultProps = {
    error: false,
    success: false,
    disabled: false,
    placeholder: '',
    errorDescription: '',
    theme: TextAreaTheme.Box,
    withFocusRing: false,
  };

  state = {
    focused: false,
  };

  _getDataAttributes() {
    const { disabled, success, theme, error } = this.props;
    const { focused } = this.state;

    return {
      [TEXT_AREA_DISABLED]: disabled,
      [TEXT_AREA_THEME]: theme,
      [TEXT_AREA_ERROR]: error,
      [TEXT_AREA_SUCCESS]: success,
      [TEXT_AREA_FOCUS]: focused,
    };
  }

  _onFocus = () => {
    this.setState({ focused: true });
  };

  _onBlur = () => {
    this.props.onBlur && this.props.onBlur();
    this.setState({ focused: false });
  };

  render() {
    const {
      id,
      value,
      theme,
      error,
      success,
      disabled,
      onChange,
      onBlur,
      placeholder,
      errorDescription,
      autoFocus,
      className,
      maxLength,
      withFocusRing,
    } = this.props;
    const dataObject = this._getDataAttributes();
    const showErrorIcon = error && errorDescription;
    const { mobile: isMobile } = this.context;

    const hasFocusRing = !isMobile && withFocusRing && this.state.focused;

    return (
      <TPAComponentsConsumer>
        {({ rtl }) => {
          return (
            <div
              {...dataObject}
              data-hook={this.props['data-hook']}
              className={st(
                classes.root,
                {
                  error,
                  rtl,
                  errorDescription: !!errorDescription,
                  theme,
                  success,
                  disabled,
                },
                hasFocusRing ? classes.focused : '',
                className,
              )}
            >
              <textarea
                value={value}
                disabled={disabled}
                onChange={(e) => {
                  if (!disabled) {
                    onChange(e);
                  }
                }}
                id={id}
                maxLength={maxLength}
                autoFocus={autoFocus}
                onFocus={this._onFocus}
                onBlur={this._onBlur}
                placeholder={placeholder}
                className={classnames(classes.textArea, 'has-custom-focus')}
                data-hook={TEXT_AREA_DATA_HOOK}
                aria-label={this.props.ariaLabel}
              />
              {showErrorIcon && (
                <div
                  data-hook={TEXT_AREA_ERROR_DATA_HOOK}
                  className={classes.errorIconWrapper}
                >
                  <Tooltip
                    placement={'top-end'}
                    appendTo={'scrollParent'}
                    skin={TooltipSkin.Error}
                    content={errorDescription}
                    moveBy={{ x: 5, y: 0 }}
                  >
                    <ErrorIcon />
                  </Tooltip>
                </div>
              )}
            </div>
          );
        }}
      </TPAComponentsConsumer>
    );
  }
}
