import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import X from 'wix-ui-icons-common/X';
import defaultTo from 'lodash/defaultTo';
import { st, classes } from './Modal.st.css';
import { flexPositions } from './constants';
import { ZIndex } from '../ZIndex';
import { FontUpgradeContext } from '../FontUpgrade/context';
import FontUpgrade from '../FontUpgrade';
import { ThemeProviderConsumerBackwardCompatible } from '../ThemeProvider/ThemeProviderConsumerBackwardCompatible';
import uniqueId from 'lodash/uniqueId';

class Modal extends React.PureComponent {
  constructor(props) {
    super(props);

    this.CHILDREN_WRAPPER_DIV_ID = uniqueId('wsr-modal');
  }

  static propTypes = {
    /** Applied as data-hook HTML attribute that can be used to create driver in testing */
    dataHook: PropTypes.string,
    /** Controls if modal is open or closed */
    isOpen: PropTypes.bool.isRequired,
    /** Border radius of modal */
    borderRadius: PropTypes.number,
    /** a11y: The value of contentLabel is set as an aria-label on the modal element. This helps assistive technology, like screen readers, to add a label to an element that would otherwise be anonymous */
    contentLabel: PropTypes.string,
    /** Renders modal content */
    children: PropTypes.any,
    /** Controls z-index of the modal overlay */
    zIndex: PropTypes.number,
    /** Enables to close modal when mouse clicked on overlay area */
    shouldCloseOnOverlayClick: PropTypes.bool,
    /** Displays a close button on the top right corner of the overlay */
    shouldDisplayCloseButton: PropTypes.bool,
    /** Callback that will be executed when the modal is requested to be closed, prior to actually closing */
    onRequestClose: PropTypes.func,
    /** Callback that will be executed after the modal has been opened */
    onAfterOpen: PropTypes.func,
    /** Horizontal position of the modal */
    horizontalPosition: PropTypes.oneOf(['start', 'center', 'end']),
    /** Vertical position of the modal */
    verticalPosition: PropTypes.oneOf(['start', 'center', 'end']),
    /** Number indicating the milliseconds to wait before closing the modal */
    closeTimeoutMS: PropTypes.number,
    /** Specifies if modal portal supports scroll */
    scrollable: PropTypes.bool,
    /** Specifies if modal content should become scrollable when modal size will fit the window */
    scrollableContent: PropTypes.bool,
    /** Sets the maximum height for a scrollable content */
    maxHeight: PropTypes.string,
    /** Sets the height for modal's content container */
    height: PropTypes.string,
    /** css position of the modal overlay */
    overlayPosition: PropTypes.oneOf([
      'static',
      'relative',
      'absolute',
      'fixed',
      'sticky',
    ]),
    /** A function that returns a DOM element on which the modal should be appended to */
    parentSelector: PropTypes.func,
    /** Selector specifying where to apply the aria-hidden attribute */
    appElement: PropTypes.string,
    /** Specifies minimum spacing between full viewport and modal content */
    screen: PropTypes.oneOf(['full', 'desktop', 'mobile']),
  };

  static defaultProps = {
    borderRadius: 0,
    shouldCloseOnOverlayClick: false,
    shouldDisplayCloseButton: false,
    horizontalPosition: 'center',
    verticalPosition: 'center',
    closeTimeoutMS: 500,
    scrollable: true,
    scrollableContent: false,
    height: '100%',
    maxHeight: 'auto',
    overlayPosition: 'fixed',
    screen: 'full',
  };

  render() {
    const {
      dataHook,
      horizontalPosition,
      verticalPosition,
      height,
      scrollableContent,
      borderRadius,
      zIndex,
      scrollable,
      isOpen,
      shouldCloseOnOverlayClick,
      shouldDisplayCloseButton,
      onRequestClose,
      onAfterOpen,
      contentLabel,
      closeTimeoutMS,
      children,
      appElement,
      overlayPosition,
      parentSelector,
      screen,
    } = this.props;

    let { maxHeight } = this.props;
    const justifyContent = flexPositions[horizontalPosition];
    const alignItems = flexPositions[verticalPosition];

    maxHeight = scrollableContent && maxHeight === 'auto' ? '100vh' : maxHeight;

    const modalStyles = {
      overlay: {
        // Overriding defaults
        position: overlayPosition,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: defaultTo(zIndex, ZIndex('Modal')),
        backgroundColor: null, // null disables the property, use css instead
        // Overriding defaults - END
        display: 'flex',
        justifyContent,
        alignItems,
        overflowY: scrollable ? 'auto' : 'hidden',
      },
      content: {
        // Overriding defaults
        border: 'none',
        overflowY: scrollableContent ? 'auto' : 'initial',
        overflowX: scrollableContent ? 'hidden' : 'initial',
        height,
        maxHeight,
        width: '100%',
        WebkitOverflowScrolling: 'touch',
        outline: 'none',
        borderRadius,
        padding: '0px',
        // Overriding defaults - END
        backgroundColor: 'transparent',
        marginBottom: '0px',
        position: 'relative',
      },
    };

    if (appElement) {
      ReactModal.setAppElement(appElement);
    } else {
      ReactModal.setAppElement('body');
    }

    return (
      <div data-hook={dataHook}>
        <FontUpgradeContext.Consumer>
          {({ active }) => {
            return (
              <ThemeProviderConsumerBackwardCompatible>
                {({ className: themeClassName }) => (
                  <ReactModal
                    portalClassName={st(
                      classes.root,
                      { scrollable },
                      `portal portal-${dataHook}`,
                      themeClassName,
                    )}
                    isOpen={isOpen}
                    shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
                    onRequestClose={onRequestClose}
                    onAfterOpen={onAfterOpen}
                    style={modalStyles}
                    className={classes.modal}
                    contentLabel={contentLabel}
                    closeTimeoutMS={closeTimeoutMS}
                    parentSelector={parentSelector}
                  >
                    <FontUpgrade active={!!active}>
                      {isOpen &&
                        shouldDisplayCloseButton &&
                        this.renderCloseButton()}
                      <div
                        data-scrollable={scrollable || null}
                        id={this.CHILDREN_WRAPPER_DIV_ID}
                        className={st(classes.childrenContainer, {
                          screen,
                        })}
                        onClick={this.handleOverlayClick}
                      >
                        {children}
                      </div>
                    </FontUpgrade>
                  </ReactModal>
                )}
              </ThemeProviderConsumerBackwardCompatible>
            );
          }}
        </FontUpgradeContext.Consumer>
      </div>
    );
  }

  handleOverlayClick = event => {
    const { shouldCloseOnOverlayClick, onRequestClose } = this.props;
    if (
      shouldCloseOnOverlayClick &&
      event.target.id === this.CHILDREN_WRAPPER_DIV_ID &&
      onRequestClose
    ) {
      onRequestClose();
    }
  };

  renderCloseButton = () => {
    return (
      <div
        onClick={this.props.onRequestClose}
        className={classes.closeButton}
        data-hook="modal-close-button"
      >
        <X size="18px" />
      </div>
    );
  };
}

export default Modal;
