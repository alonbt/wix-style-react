import * as React from 'react';
import classnames from 'classnames';
import { st, classes } from './TextButton.st.css';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';
import { ButtonNext } from 'wix-ui-core/button-next';
import { ButtonProps as ButtonNextProps } from 'wix-ui-core/dist/src/components/button-next/button-next';
import { TPAComponentProps } from '../../types';

export enum TEXT_BUTTON_PRIORITY {
  primary = 'primary',
  secondary = 'secondary',
  link = 'link',
}

export interface TextButtonProps extends ButtonNextProps, TPAComponentProps {
  priority?: TEXT_BUTTON_PRIORITY;
}

/** An implementation of link-like button */
export class TextButton extends React.Component<TextButtonProps> {
  static displayName = 'TextButton';
  static defaultProps: TextButtonProps = {
    priority: TEXT_BUTTON_PRIORITY.link,
  };

  _wrapAffix = (icon, type) => {
    return (
      <span className={classnames(classes[`${type}-icon`], classes.affixIcon)}>
        {icon}
      </span>
    );
  };

  _getAffixes = () => {
    const { prefixIcon, suffixIcon } = this.props;
    const hasIcons = prefixIcon || suffixIcon;

    return hasIcons
      ? {
          prefixIcon: prefixIcon
            ? this._wrapAffix(prefixIcon, 'prefix')
            : undefined,
          suffixIcon: suffixIcon
            ? this._wrapAffix(suffixIcon, 'suffix')
            : undefined,
        }
      : null;
  };

  render() {
    const { priority, className, ...rest } = this.props;
    const affixes = this._getAffixes();

    return (
      <TPAComponentsConsumer>
        {({ mobile }) => (
          <ButtonNext
            {...rest}
            className={st(classes.root, { priority, mobile }, className)}
            {...affixes}
          />
        )}
      </TPAComponentsConsumer>
    );
  }
}
