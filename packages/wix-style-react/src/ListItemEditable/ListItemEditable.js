import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';

import { classes } from './ListItemEditable.st.css';
import { dataHooks } from './constants';
import IconButton from '../IconButton';
import Tooltip from '../Tooltip';
import Box from '../Box';
import { Check, X } from 'wix-ui-icons-common';
import { TooltipCommonProps } from '../common/PropTypes/TooltipCommon';

/** ListItemEditable */
class ListItemEditable extends React.PureComponent {
  state = {
    value: '',
  };

  /**
   * Callback triggered when input value is changed
   * @param event (Event)
   * @private
   */
  _onInputChange = event => {
    this.setState({ value: event.target.value });
  };

  /**
   * Callback triggered when approved button is clicked
   * @private
   */
  _onApproveClicked = () => {
    const { value } = this.state;
    const { onApprove } = this.props;

    onApprove(value);
  };

  _renderInput = () => {
    const { value } = this.state;
    const { placeholder, status, size, statusMessage } = this.props;
    return (
      <Box marginRight={3} flex={1} minWidth={0}>
        <Input
          dataHook={dataHooks.input}
          className={classes.input}
          size={size}
          status={status}
          value={value}
          statusMessage={statusMessage}
          onChange={this._onInputChange}
          placeholder={placeholder}
        />
      </Box>
    );
  };

  _renderCancelButton = () => {
    const {
      onCancel,
      cancelButtonTooltipContent,
      cancelButtonTooltipProps,
      size,
    } = this.props;

    return (
      <Box marginRight={2}>
        <Tooltip
          {...cancelButtonTooltipProps}
          dataHook={dataHooks.cancelButtonTooltip}
          disabled={!cancelButtonTooltipContent}
          content={cancelButtonTooltipContent}
        >
          <IconButton
            dataHook={dataHooks.cancelButton}
            size={size}
            priority="secondary"
            onClick={onCancel}
            children={<X />}
          />
        </Tooltip>
      </Box>
    );
  };

  _renderApproveButton = () => {
    const { value } = this.state;
    const {
      approveButtonTooltipContent,
      approveButtonTooltipProps,
      size,
    } = this.props;

    return (
      <Tooltip
        {...approveButtonTooltipProps}
        dataHook={dataHooks.approveButtonTooltip}
        disabled={!approveButtonTooltipContent || !this.state.value}
        content={approveButtonTooltipContent}
      >
        <IconButton
          size={size}
          disabled={!value}
          onClick={this._onApproveClicked}
          dataHook={dataHooks.approveButton}
        >
          <Check />
        </IconButton>
      </Tooltip>
    );
  };

  render() {
    const { dataHook, className, margins } = this.props;

    return (
      <Box
        dataHook={dataHook}
        className={className}
        margin={margins === 'list-item' && '3px 24px'}
      >
        {/* Input */}
        {this._renderInput()}

        {/* Buttons */}
        {this._renderCancelButton()}
        {this._renderApproveButton()}
      </Box>
    );
  }
}

export const listItemEditableBuilder = ({
  id,
  dataHook,
  className,
  size,
  placeholder,
  onApprove,
  onCancel,
  cancelButtonTooltipContent,
  cancelButtonTooltipProps,
  approveButtonTooltipContent,
  approveButtonTooltipProps,
  status,
  statusMessage,
  margins,
}) => ({
  id,
  disabled: true,
  overrideOptionStyle: true,
  value: props => (
    <ListItemEditable
      {...props}
      dataHook={dataHook}
      className={className}
      size={size}
      placeholder={placeholder}
      onApprove={onApprove}
      onCancel={onCancel}
      cancelButtonTooltipContent={cancelButtonTooltipContent}
      cancelButtonTooltipProps={cancelButtonTooltipProps}
      approveButtonTooltipContent={approveButtonTooltipContent}
      approveButtonTooltipProps={approveButtonTooltipProps}
      status={status}
      statusMessage={statusMessage}
      margins={margins}
    />
  ),
});

ListItemEditable.displayName = 'ListItemEditable';

ListItemEditable.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,

  /** Placeholder to display */
  placeholder: PropTypes.string,

  /**
   * A callback function triggered by clicking the approve button.
   * ##### Signature:
   * function(value: string) => void
   * * `value`: the text contained in the input.
   */
  onApprove: PropTypes.func.isRequired,

  /**
   * A callback function triggered by clicking the cancel button.
   * ##### Signature:
   * function() => void
   */
  onCancel: PropTypes.func.isRequired,

  /** Cancel button tooltip content */
  cancelButtonTooltipContent: PropTypes.node,

  /** Cancel button tooltip common props */
  cancelButtonTooltipProps: PropTypes.shape(TooltipCommonProps),

  /** Input status - use to display an status indication for the user */
  status: PropTypes.oneOf(['error', 'warning', 'loading']),

  /** Specifies the size of the input */
  size: PropTypes.oneOf(['small', 'medium']),

  /** Approve button tooltip content */
  approveButtonTooltipContent: PropTypes.node,

  /** Approve button tooltip common props */
  approveButtonTooltipProps: PropTypes.shape(TooltipCommonProps),

  /** The status (error/loading) message to display when hovering the status icon, if not given or empty there will be no tooltip */
  statusMessage: PropTypes.node,

  /** The type of margin */
  margins: PropTypes.oneOf(['list-item', 'none']),
};

ListItemEditable.defaultProps = {
  size: 'small',
  margins: 'list-item',
};

export default ListItemEditable;
