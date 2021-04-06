import React from 'react';
import { CircularProgressBar as CoreCircularProgressBar } from 'wix-ui-core/dist/src/components/circular-progress-bar';
import CircleLoaderCheck from 'wix-ui-icons-common/system/CircleLoaderCheck';
import CircleLoaderCheckSmall from 'wix-ui-icons-common/system/CircleLoaderCheckSmall';
import FormFieldError from 'wix-ui-icons-common/system/FormFieldError';
import FormFieldErrorSmall from 'wix-ui-icons-common/system/FormFieldErrorSmall';
import Tooltip from '../Tooltip';
import { ThemeProviderConsumerBackwardCompatible } from '../ThemeProvider/ThemeProviderConsumerBackwardCompatible';
import { st, classes } from './CircularProgressBar.st.css';
import PropTypes from 'prop-types';
import { dataHooks, Size, sizesMap } from './constants';

const sizeToSuccessIcon = {
  [Size.small]: CircleLoaderCheckSmall,
  [Size.medium]: CircleLoaderCheck,
  [Size.large]: CircleLoaderCheck,
};

const sizeToErrorIcon = {
  [Size.small]: <FormFieldErrorSmall />,
  [Size.medium]: <FormFieldError />,
  [Size.large]: <FormFieldError />,
};

class CircularProgressBar extends React.PureComponent {
  _renderSuccessIcon(size) {
    return (
      <ThemeProviderConsumerBackwardCompatible
        defaultIcons={{
          CircularProgressBar: sizeToSuccessIcon,
        }}
      >
        {({ icons }) => {
          const IconToRender = icons.CircularProgressBar[size];
          return <IconToRender />;
        }}
      </ThemeProviderConsumerBackwardCompatible>
    );
  }

  _renderProgressBar() {
    const { light, size, label, ...otherProps } = this.props;

    return (
      <CoreCircularProgressBar
        className={st(classes.progressBar, { light, size })}
        {...otherProps}
        label={label}
        data-hook={dataHooks.circularProgressBar}
        size={sizesMap[size]}
        data-size={size}
        successIcon={this._renderSuccessIcon(size)}
        errorIcon={sizeToErrorIcon[size]}
      />
    );
  }

  render() {
    const { dataHook, error, errorMessage } = this.props;

    return (
      <div data-hook={dataHook} className={st(classes.root)}>
        {error && errorMessage ? (
          <Tooltip content={errorMessage} dataHook={dataHooks.tooltip}>
            {this._renderProgressBar()}
          </Tooltip>
        ) : (
          this._renderProgressBar()
        )}
      </div>
    );
  }
}

CircularProgressBar.displayName = 'CircularProgressBar';

CircularProgressBar.defaultProps = {
  size: 'medium',
};

CircularProgressBar.propTypes = {
  /** Should be true if had failure during the progress */
  error: PropTypes.bool,

  /** Label to display when an error happens */
  errorLabel: PropTypes.string,

  /** Message to display when an error happens */
  errorMessage: PropTypes.string,

  /** Use light theme instead of dark theme */
  light: PropTypes.bool,

  /** Use to display a percentage progress */
  showProgressIndication: PropTypes.bool,

  /** Use to display custom text in the progress bar */
  label: PropTypes.string,

  /** Size of the bar */
  size: PropTypes.string,

  /** The number of the percentage progress */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  dataHook: PropTypes.string,
};

export default CircularProgressBar;
