import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Popover from '../../Popover';
import { Mode } from './constants';

const controlledErrorMsg = method =>
  `ClosablePopover.${method}() can not be called when component is Controlled. (opened prop should be undefined)`;

/**
 * Closable Popover
 * Either a normal Controlled Popover, or a Popover that is initially opened and can be the closed by
 * calling a closeAction.
 */
class ClosablePopover extends PureComponent {
  state = {
    open: this.props.initiallyOpened,
    mode: this.props.initiallyOpened ? Mode.ClickToClose : Mode.Hover,
  };

  _isControlled() {
    return typeof this.props.opened === 'boolean';
  }

  open = () => this._doOpen(Mode.ClickToClose);

  _doOpen = nextMode => {
    if (this._isControlled()) {
      throw new Error(controlledErrorMsg('open'));
    }
    !this.state.open &&
      this.setState(
        {
          open: true,
          mode: nextMode,
        },
        () => {
          this.props.onOpen && this.props.onOpen();
        },
      );
  };

  close = () => {
    if (this._isControlled()) {
      throw new Error(controlledErrorMsg('close'));
    }
    this.state.open &&
      this.setState(
        {
          open: false,
          mode: Mode.Hover,
        },
        () => {
          this.props.onClose && this.props.onClose();
        },
      );
  };

  _handleMouseEnter = () => {
    if (this.state.mode === Mode.Hover) {
      this._doOpen(Mode.Hover);
    }
  };

  _handleMouseLeave = () => {
    if (this.state.mode === Mode.Hover && this.props.closeOnMouseLeave) {
      this.close();
    }
  };

  render() {
    const {
      content,
      appearance,
      target,
      children,
      onClose,
      onOpen,
      initiallyOpened,
      closeOnMouseLeave,
      hideDelay,
      ...rest
    } = this.props;

    const open = this._isControlled() ? this.props.opened : this.state.open;

    const popoverProps = {
      ...rest,
      animate: true,
      theme: appearance,
      shown: open,
      onMouseEnter: this._handleMouseEnter,
      onMouseLeave: this._handleMouseLeave,
    };

    return (
      <Popover {...popoverProps}>
        <Popover.Element>{target}</Popover.Element>
        <Popover.Content>{content(this.actions)}</Popover.Content>
      </Popover>
    );
  }

  actions = {
    close: this.close,
  };
}

ClosablePopover.defaultProps = {
  hideDelay: 0,
  initiallyOpened: true,
  closeOnMouseLeave: true,
};

ClosablePopover.propTypes = {
  /** Controls whether the popover's content is shown or not.
   * When undefined, then the component is Uncontrolled,
   * It is initially open, and it can be closed by close-action */
  opened: PropTypes.bool,
  /** Controls whether the popover's content is initially opened (in Uncontrolled mode only) */
  initiallyOpened: PropTypes.bool,
  /** The popover's target element*/
  target: PropTypes.node.isRequired,
  /** Callback to call when the popover content is requested to be opened (Uncontrolled mode only) */
  onOpen: PropTypes.func,
  /** callback to call when the popover content is requested to be closed (Uncontrolled mode only). NOTE: this callback is called when the close timeout (if exists) starts */
  onClose: PropTypes.func,
  /** Disable close on mouseLeave */
  closeOnMouseLeave: PropTypes.bool,
  /** The popover's content, given as a function that receives control-actions and renders the contet.
   * In Uncontrolled mode, this function is still called only once.
   */
  content: PropTypes.func.isRequired,
  /** A css class to be applied to the component's root element */
  className: PropTypes.string,
};

export default ClosablePopover;
