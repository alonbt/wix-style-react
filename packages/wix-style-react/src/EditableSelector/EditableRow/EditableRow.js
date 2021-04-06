import React, { Component } from 'react';
import PropTypes from 'prop-types';
import X from 'wix-ui-icons-common/X';
import Check from 'wix-ui-icons-common/Check';

import Input from '../../Input';
import Tooltip from '../../Tooltip';
import IconButton from '../../IconButton';
import { classes } from '../EditableSelector.st.css';
import { dataHooks } from './constants';

class EditableRow extends Component {
  static propTypes = {
    newOption: PropTypes.string,
    onApprove: PropTypes.func,
    onCancel: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      newOption: props.newOption || '',
    };
  }

  componentDidMount() {
    this.input.focus();
  }

  onApprove = () => {
    this.props.onApprove && this.props.onApprove(this.state.newOption);
  };

  onCancel = () => {
    this.props.onCancel && this.props.onCancel();
  };

  render() {
    const { dataHook } = this.props;
    return (
      <div data-hook={dataHook} className={classes.editableRowContainer}>
        <div className={classes.editableRowInputWrap}>
          <Input
            ref={input => (this.input = input)}
            className={classes.editableRowInput}
            dataHook={dataHooks.editRowInput}
            value={this.state.newOption}
            onChange={event => this.setState({ newOption: event.target.value })}
            onEnterPressed={() => this.onApprove()}
            onEscapePressed={() => this.onCancel()}
            size="medium"
            textOverflow="clip"
            theme="normal"
            width="initial"
          />
        </div>

        <div className={classes.editableRowButtons}>
          <Tooltip content="Cancel" timeout={0}>
            <IconButton
              onClick={this.onCancel}
              size="medium"
              priority="secondary"
              dataHook={dataHooks.editRowCancelButton}
            >
              <X />
            </IconButton>
          </Tooltip>

          <Tooltip content="Confirm" timeout={0}>
            <IconButton
              onClick={this.onApprove}
              size="medium"
              disabled={this.state.newOption.length === 0}
              dataHook={dataHooks.editRowApproveButton}
            >
              <Check />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    );
  }
}

export default EditableRow;
