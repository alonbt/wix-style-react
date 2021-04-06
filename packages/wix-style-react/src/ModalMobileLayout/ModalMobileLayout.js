import React from 'react';
import PropTypes from 'prop-types';
import X from 'wix-ui-icons-common/X';
import IconButton from '../IconButton';

import { st, classes } from './ModalMobileLayout.st.css';

class ModalMobileLayout extends React.PureComponent {
  static displayName = 'ModalMobileLayout';

  static propTypes = {
    /** Applied as data-hook HTML attribute that can be used in the tests */
    dataHook: PropTypes.string,

    /** A css class to be applied to the component's root element */
    className: PropTypes.string,

    /** title node to be displayed in the header strip */
    title: PropTypes.node,

    /** If true, the title will be sticky to the top of the modal */
    stickyTitle: PropTypes.bool,

    /** content node to be displayed */
    content: PropTypes.node,

    /** footer node to be displayed */
    footer: PropTypes.node,

    /** If true, the footer will be sticky to the bottom of the modal */
    stickyFooter: PropTypes.bool,

    /** callback for when there's a click on the overlay (in case the modal in not fullscreen) */
    onOverlayClick: PropTypes.func,

    /** callback for when the the close button is clicked.  **Note**: if this prop is not provided, then the close button will not be shown. */
    onCloseButtonClick: PropTypes.func,

    /** If true, the modal will take all of the screen */
    fullscreen: PropTypes.bool,
  };

  static defaultProps = {
    stickyTitle: false,
    stickyFooter: false,
    fullscreen: false,
  };

  render() {
    const {
      dataHook,
      className,
      title,
      content,
      footer,
      onOverlayClick,
      onCloseButtonClick,
      fullscreen,
      stickyTitle,
      stickyFooter,
    } = this.props;

    return (
      <div
        id="modalMobileLayout-root"
        data-hook={dataHook}
        className={st(
          classes.root,
          {
            fullscreen,
            stickyTitle,
            stickyFooter,
            noTitle: !title,
            noFooter: !footer,
          },
          className,
        )}
        onClick={({ target: { id } }) => {
          id === 'modalMobileLayout-root' && onOverlayClick && onOverlayClick();
        }}
      >
        <div className={classes.container}>
          {onCloseButtonClick && (
            <div className={classes.close}>
              <IconButton
                dataHook="modalMobileLayout-close-button"
                skin="light"
                onClick={onCloseButtonClick}
              >
                <X />
              </IconButton>
            </div>
          )}
          {title && stickyTitle && this._renderTitle()}
          <div
            className={classes.content}
            data-hook="modalMobileLayout-content"
          >
            <div>
              {title && !stickyTitle && this._renderTitle()}
              {content}
              {footer && !stickyFooter && this._renderFooter()}
            </div>
          </div>
          {footer && stickyFooter && this._renderFooter()}
        </div>
      </div>
    );
  }

  _renderTitle = () => (
    <div
      className={classes.title}
      data-hook="modalMobileLayout-title"
      data-sticky-title={this.props.stickyTitle}
    >
      {this.props.title}
    </div>
  );

  _renderFooter = () => (
    <div
      className={classes.footer}
      data-hook="modalMobileLayout-footer"
      data-sticky-footer={this.props.stickyFooter}
    >
      {this.props.footer}
    </div>
  );
}

export default ModalMobileLayout;
