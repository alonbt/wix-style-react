import React from 'react';
import PropTypes from 'prop-types';
import ClosablePopover from './ClosablePopover/ClosablePopover';
import FloatingHelperContent from './FloatingHelperContent/FloatingHelperContent';
import { classes } from './FloatingHelper.st.css';
import { dataHooks, floatingHelperAppearance } from './constants';
import CloseButton from '../CloseButton';
import {
  SKINS as CloseButtonSkins,
  SIZES as CloseButtonSizes,
} from '../CloseButton/constants';

class FloatingHelper extends React.Component {
  closablePopoverRef;

  open = () => this.closablePopoverRef.open();

  close = () => this.closablePopoverRef.close();

  _isControlled() {
    return this.props.opened !== undefined;
  }

  _getCloseButtonHandler(closableActions) {
    return this._isControlled()
      ? this.props.onClose
        ? this.props.onClose
        : () => null
      : closableActions.close;
  }

  _renderContent(closableActions, { width, content, appearance }) {
    return (
      <div data-hook={dataHooks.contentWrapper} style={{ width }}>
        <div
          data-hook={dataHooks.innerContent}
          className={classes.innerContent}
        >
          <CloseButton
            className={classes.closeButton}
            dataHook={dataHooks.closeButton}
            onClick={() => this._getCloseButtonHandler(closableActions)()}
            skin={
              appearance === floatingHelperAppearance.dark
                ? CloseButtonSkins.light
                : CloseButtonSkins.dark
            }
            size={CloseButtonSizes.medium}
          />
          {React.cloneElement(content, { appearance })}
        </div>
      </div>
    );
  }

  render() {
    const { children, width, content, appearance, ...rest } = this.props;

    const renderContent = closableActions =>
      this._renderContent(closableActions, {
        width,
        content,
        appearance,
      });

    const closablePopoverProps = {
      ...rest,
      appearance,
      content: renderContent,
      showArrow: true,
      closeOnMouseLeave: false,
    };

    return (
      <ClosablePopover
        {...closablePopoverProps}
        ref={ref => (this.closablePopoverRef = ref)}
        className={classes.root}
      />
    );
  }
}

FloatingHelper.displayName = 'FloatingHelper';

FloatingHelper.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,
  /** Width HTML attribute of the content. If a number is passed then it defaults to px. e.g width={400} => width="400px" */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** The target of the popover */
  target: PropTypes.node.isRequired,
  /** A `<FloatingHelper.Content>` component */
  content: PropTypes.node.isRequired,
  /** callback to call when the popover content is requested to be closed (Uncontrolled mode only). NOTE: this callback is called when the close timeout (if exists) starts In Controlled mode - called when the close button is clicked. In Uncontrolled mode - called when the popover is closed */
  onClose: PropTypes.func,
  /** Appearance : `dark` or `light` */
  appearance: PropTypes.oneOf(['dark', 'light']),
  /** Controls whether the popover's content is initially opened (In Uncontrolled mode only) */
  initiallyOpened: PropTypes.bool,
  /** Controls whether the popover's content is shown or not (aka Controlled mode).
   * When undefined, then the component is Uncontrolled. See open/close behaviour section in docs. */
  opened: PropTypes.bool,
  /** The location to display the content. */
  placement: PropTypes.oneOf([
    'auto-start',
    'auto',
    'auto-end',
    'top-start',
    'top',
    'top-end',
    'right-start',
    'right',
    'right-end',
    'bottom-end',
    'bottom',
    'bottom-start',
    'left-end',
    'left',
    'left-start',
  ]).isRequired,
  /** Enables calculations in relation to a dom element. */
  appendTo: PropTypes.oneOf(['scrollParent', 'viewport', 'window']),
  /** Callback to call when the popover content is requested to be opened (Uncontrolled mode only)*/
  onOpen: PropTypes.func,
  /** Moves the floating helper relative to the parent by x or y */
  moveBy: PropTypes.shape({ x: PropTypes.number, y: PropTypes.number }),
  /** Floating helper z-index */
  zIndex: PropTypes.number,
  /** Set a delay on closing */
  hideDelay: PropTypes.number,
};

FloatingHelper.defaultProps = {
  appendTo: 'window',
  width: '444px',
  initiallyOpened: true,
  appearance: 'dark',
};

FloatingHelper.Content = FloatingHelperContent;

export default FloatingHelper;
