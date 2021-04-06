import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Heading from '../../Heading';
import Text from '../../Text';
import TextButton from '../../TextButton';
import CloseButton from '../../CloseButton';
import Button from '../../Button';

import styles from './MessageBoxMarketerialLayout.scss';
import deprecationLog from '../../utils/deprecationLog';

const buttonSkinByTheme = {
  blue: 'standard',
  purple: 'premium',
  white: 'dark',
};

class MessageBoxMarketerialLayout extends React.PureComponent {
  constructor(props) {
    super(props);

    deprecationLog(
      '<MessageBoxMarketerialLayout/> - Component is deprecated and will be removed as part of the next major version, please use <AnnouncementModalLayout /> instead.',
    );
  }
  render() {
    const {
      dataHook,
      title,
      content,
      primaryButtonLabel,
      secondaryButtonLabel,
      imageUrl,
      onClose,
      theme,
      imageComponent,
      footerBottomChildren,
      removeButtonsPadding,
      width,
      noBodyPadding,
    } = this.props;

    const headerClasses = classNames({
      [styles.headerBase]: true,
      [styles.header]: !!imageComponent || !!imageUrl,
      [styles[`header-${theme}`]]: true,
    });

    // instead of introducing a breaking change for padding removal for non buttons existence, we add this prop
    const shouldRemoveButtonsPadding =
      removeButtonsPadding && !primaryButtonLabel && !secondaryButtonLabel;
    const shouldDisplayBodyPadding = !noBodyPadding;

    return (
      <div className={styles.root} style={{ width }} data-hook={dataHook}>
        <div className={headerClasses}>
          <div className={styles.close}>
            <CloseButton
              dataHook="close-button"
              size="medium"
              onClick={onClose}
              skin={theme === 'white' ? 'dark' : 'lightFilled'}
            />
          </div>
          {imageComponent ? (
            <div className={styles.headerImageComponent}>{imageComponent}</div>
          ) : imageUrl ? (
            <div className={styles.headerImage}>
              <img src={imageUrl} data-hook="header-image" />
            </div>
          ) : null}
        </div>
        <div
          className={classNames(styles.title, {
            [styles.bodyPadding]: shouldDisplayBodyPadding,
          })}
          data-hook="message-box-title"
        >
          <Heading appearance="H1">{title}</Heading>
        </div>
        <div
          className={classNames(styles.content, {
            [styles.bodyPadding]: shouldDisplayBodyPadding,
          })}
        >
          <Text size="medium" weight="thin">
            {content}
          </Text>
        </div>

        {shouldRemoveButtonsPadding ? (
          <div className={styles.emptyButtonsContainer} />
        ) : (
          this._renderButtons()
        )}
        {footerBottomChildren ? (
          <div
            data-hook="footer-layout-bottom-children"
            className={styles.bottomChildren}
            children={footerBottomChildren}
          />
        ) : null}
      </div>
    );
  }

  _renderButtons = () => {
    const {
      primaryButtonLabel,
      primaryButtonTheme,
      primaryButtonNode,
      theme,
      onPrimaryButtonClick,
      primaryButtonDisabled,
      secondaryButtonLabel,
      footerBottomChildren,
      onSecondaryButtonClick,
    } = this.props;
    return (
      <div className={styles.buttonsContainer}>
        {!!primaryButtonNode && (
          <div data-hook="primary-button-node">{primaryButtonNode}</div>
        )}
        {!primaryButtonNode && primaryButtonLabel && (
          <Button
            skin={buttonSkinByTheme[primaryButtonTheme || theme]}
            priority={
              !primaryButtonTheme && theme === 'white' ? 'secondary' : 'primary'
            }
            onClick={onPrimaryButtonClick}
            dataHook="primary-button"
            disabled={primaryButtonDisabled}
          >
            {primaryButtonLabel}
          </Button>
        )}
        {secondaryButtonLabel && !footerBottomChildren && (
          <div className={styles.secondaryButtonContainer}>
            <TextButton
              size="small"
              onClick={onSecondaryButtonClick}
              dataHook="secondary-button"
            >
              {secondaryButtonLabel}
            </TextButton>
          </div>
        )}
      </div>
    );
  };
}

MessageBoxMarketerialLayout.propTypes = {
  /** applied as data-hook HTML attribute that can be used to create driver in testing */
  dataHook: PropTypes.string,
  title: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  primaryButtonLabel: PropTypes.string,
  primaryButtonDisabled: PropTypes.bool,
  primaryButtonNode: PropTypes.node,
  secondaryButtonLabel: PropTypes.string,
  onPrimaryButtonClick: PropTypes.func,
  onSecondaryButtonClick: PropTypes.func,
  imageUrl: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  imageComponent: PropTypes.node,
  footerBottomChildren: PropTypes.node,
  theme: PropTypes.oneOf(['blue', 'purple', 'white']),
  primaryButtonTheme: PropTypes.oneOf(['blue', 'purple']),
  removeButtonsPadding: PropTypes.bool,
  width: PropTypes.string,
  noBodyPadding: PropTypes.bool,
};

MessageBoxMarketerialLayout.defaultProps = {
  theme: 'blue',
  removeButtonsPadding: false,
  width: '600px',
  noBodyPadding: false,
};

export default MessageBoxMarketerialLayout;
