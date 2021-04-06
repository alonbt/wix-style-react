import React from 'react';
import PropTypes from 'prop-types';
import X from 'wix-ui-icons-common/X';
import Text from '../Text';
import IconButton from '../IconButton';
import Tooltip from '../Tooltip';
import { classes } from './ModalPreviewLayout.st.css';
import { dataHooks, modalPreviewIDs, arrowsDirection } from './constants';
import NavigationButton from './NavigationButton/NavigationButton';
import deprecationLog from '../utils/deprecationLog';

/** This is a fullscreen modal to present a document to the user overlaying the entire view port */
class ModalPreviewLayout extends React.PureComponent {
  static displayName = 'ModalPreviewLayout';

  static propTypes = {
    /** Applied as data-hook HTML attribute that can be used in the tests */
    dataHook: PropTypes.string,
    /** component to be displayed in header strip to preform actions relevant to the displayed content */
    actions: PropTypes.node,
    /** title text to be displayed in the header strip */
    title: PropTypes.string,
    /** modal content displayed mid-screen*/
    children: PropTypes.node.isRequired,
    /** callback for when the modal is closed */
    onClose: PropTypes.func.isRequired,
    /** boolean to determine whether closing the overlay on click */
    shouldCloseOnOverlayClick: PropTypes.bool,
    /** Tooltip close button text */
    closeButtonTooltipText: PropTypes.node,
    /** this prop is deprecated and should not be used
     * @deprecated
     */
    prevButtonTooltipText: PropTypes.string,
    /** this prop is deprecated and should not be used
     * @deprecated
     */
    nextButtonTooltipText: PropTypes.string,
    /** Previous button props
     * ##### onClick signature:
     * function(childIndexDisplayed: number) => void
     * * `childIndexDisplayed`: the index of the child component displayed.
     */
    prevButtonProps: PropTypes.shape({
      onClick: PropTypes.func,
      tooltipText: PropTypes.node,
    }),
    /** Next button props
     * ##### onClick signature:
     * function(childIndexDisplayed: number) => void
     * * `childIndexDisplayed`: the index of the child component displayed.
     */
    nextButtonProps: PropTypes.shape({
      onClick: PropTypes.func,
      tooltipText: PropTypes.node,
    }),
  };

  static defaultProps = {
    shouldCloseOnOverlayClick: true,
    nextButtonProps: {},
    prevButtonProps: {},
  };

  constructor(props) {
    super(props);
    this.state = { childIndexDisplayed: 0 };

    deprecationLog(
      'nextButtonTooltipText and prevButtonTooltipText props are deprecated and will be removed as part of the next major version, please use nextButtonProps and prevButtonProps.',
    );
  }

  _shouldClose(id) {
    return (
      this.props.shouldCloseOnOverlayClick &&
      [modalPreviewIDs.overlay, modalPreviewIDs.innerOverlay].includes(id)
    );
  }

  _onRightNavigationClick = () => {
    const { childIndexDisplayed } = this.state;
    const { onClick } = this.props.nextButtonProps;
    const newChildIndexDisplayed = childIndexDisplayed + 1;

    this.setState({ childIndexDisplayed: newChildIndexDisplayed }, () => {
      onClick && onClick(newChildIndexDisplayed);
    });
  };

  _onLeftNavigationClick = () => {
    const { childIndexDisplayed } = this.state;
    const { onClick } = this.props.prevButtonProps;
    const newChildIndexDisplayed = childIndexDisplayed - 1;

    this.setState({ childIndexDisplayed: newChildIndexDisplayed }, () => {
      onClick && onClick(newChildIndexDisplayed);
    });
  };

  _onOverlayClick(onClose) {
    return ({ target: { id } }) => {
      if (this._shouldClose(id) && typeof onClose === 'function') {
        onClose();
      }
    };
  }

  _renderNavigationButtons(hasLeft, hasRight) {
    const { prevButtonProps, nextButtonProps } = this.props;

    /* will be deprecated in next major */
    const { prevButtonTooltipText, nextButtonTooltipText } = this.props;

    return (
      <React.Fragment>
        {hasLeft && (
          <NavigationButton
            tooltipText={prevButtonProps.tooltipText || prevButtonTooltipText}
            direction={arrowsDirection.leftArrow}
            onClick={this._onLeftNavigationClick}
          />
        )}
        {hasRight && (
          <NavigationButton
            tooltipText={nextButtonProps.tooltipText || nextButtonTooltipText}
            direction={arrowsDirection.rightArrow}
            onClick={this._onRightNavigationClick}
          />
        )}
      </React.Fragment>
    );
  }

  render() {
    const {
      dataHook,
      actions,
      title,
      children,
      onClose,
      closeButtonTooltipText,
    } = this.props;
    const { childIndexDisplayed } = this.state;

    const childrenArr = React.Children.toArray(children);
    const hasLeft = childIndexDisplayed > 0;
    const hasRight = childIndexDisplayed < childrenArr.length - 1;

    return (
      <div
        id={modalPreviewIDs.overlay}
        data-hook={dataHook}
        className={classes.root}
        onClick={this._onOverlayClick(onClose)}
      >
        <div className={classes.header}>
          <div
            data-hook={dataHooks.modalPreviewTitle}
            className={classes.title}
          >
            <Text light ellipsis>
              {title}
            </Text>
          </div>
          <div
            className={classes.actions}
            data-hook={dataHooks.modalPreviewActions}
          >
            {actions}
          </div>
          <div className={classes.closeButton}>
            <Tooltip
              disabled={!closeButtonTooltipText}
              className={classes.modalTooltip}
              dataHook={dataHooks.closeButtonTooltip}
              appendTo="scrollParent"
              content={<Text>{closeButtonTooltipText}</Text>}
              placement="bottom"
            >
              <IconButton
                as="button"
                onClick={onClose}
                priority="secondary"
                skin="transparent"
                dataHook={dataHooks.modalPreviewCloseButton}
              >
                <X />
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <div
          id={modalPreviewIDs.innerOverlay}
          data-hook={dataHooks.innerOverlay}
          className={classes.innerOverlay}
        >
          <div
            data-hook={dataHooks.modalPreviewContent}
            className={classes.content}
            data-index={childIndexDisplayed}
          >
            {childrenArr[childIndexDisplayed]}
          </div>
          {this._renderNavigationButtons(hasLeft, hasRight)}
        </div>
      </div>
    );
  }
}

export default ModalPreviewLayout;
