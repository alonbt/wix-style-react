import React, { PureComponent } from 'react';
import { ThemeProviderConsumerBackwardCompatible } from '../ThemeProvider/ThemeProviderConsumerBackwardCompatible';
import { generateDataAttr } from '../utils/generateDataAttr';
import { ButtonNext } from 'wix-ui-core/dist/src/components/button-next';
import Close from 'wix-ui-icons-common/system/Close';
import CloseLarge from 'wix-ui-icons-common/system/CloseLarge';
import { SIZES } from './constants';

import PropTypes from 'prop-types';
import { st, classes } from './CloseButton.st.css';

const childSize = '18px';

class CloseButton extends PureComponent {
  static displayName = 'CloseButton';

  static propTypes = {
    /** render as some other component or DOM tag */
    as: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.object,
      PropTypes.string,
    ]),
    /** additional css classes */
    className: PropTypes.string,
    /** Used for passing any wix-style-react icon. For external icon make sure to follow ux sizing guidelines */
    children: PropTypes.node,
    /** skins of closebutton */
    skin: PropTypes.oneOf([
      'standard',
      'standardFilled',
      'light',
      'lightFilled',
      'dark',
      'transparent',
    ]),
    /** size of closebutton */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /** Click event handler  */
    onClick: PropTypes.func,
    /** applies disabled styles */
    disabled: PropTypes.bool,
    /** string based data hook for testing */
    dataHook: PropTypes.string,
  };

  static defaultProps = {
    skin: 'standard',
    size: 'small',
    disabled: false,
  };

  _renderCloseIcon(Icon, size) {
    let CloseIcon;
    if (size === SIZES.small) {
      // fallback to Close icon if children not provided (current behavior)
      CloseIcon = <Icon data-hook="close" />;
    } else if (size === SIZES.medium) {
      CloseIcon = <Icon data-hook="close-medium" />;
    } else {
      CloseIcon = <Icon data-hook="close-large" size="12" />;
    }
    return CloseIcon;
  }

  render() {
    const { skin, size, className, dataHook, children, ...rest } = this.props;

    return (
      <ButtonNext
        {...rest}
        className={st(classes.root, { skin, size }, className)}
        {...generateDataAttr(this.props, ['skin', 'size'])}
        data-hook={dataHook}
      >
        {children ? (
          React.cloneElement(children, {
            size: childSize,
            width: childSize,
            height: childSize,
          })
        ) : (
          <ThemeProviderConsumerBackwardCompatible
            defaultIcons={{
              CloseButton: {
                small: Close,
                medium: CloseLarge,
                large: CloseLarge,
              },
            }}
          >
            {({ icons }) =>
              this._renderCloseIcon(icons.CloseButton[size], size)
            }
          </ThemeProviderConsumerBackwardCompatible>
        )}
      </ButtonNext>
    );
  }
}

export default CloseButton;
