import React from 'react';
import PropTypes from 'prop-types';
import { st, classes } from './DatePickerDropdown.st.css';
import ChevronDown from 'wix-ui-icons-common/ChevronDown';
import DropdownBase from '../../DropdownBase';
import TextButton from '../../TextButton';

export default class DropdownPicker extends React.Component {
  static propTypes = {
    dataHook: PropTypes.string,
    className: PropTypes.string,
    caption: PropTypes.node,
    options: PropTypes.array,
    onChange: PropTypes.func,
    selectedId: PropTypes.number,
    ariaLabel: PropTypes.string,
    ariaLabelledBy: PropTypes.string,
  };

  state = {
    open: false,
  };

  _onSelect = data => {
    const { onChange } = this.props;

    this.setState(
      {
        open: false,
      },
      () => {
        if (typeof onChange === 'function') onChange(data);
      },
    );
  };

  _toggle = () => {
    this.setState({ open: !this.state.open });
  };

  _onKeyDown = (e, delegateKeyDown) => {
    const eventWasHandled = delegateKeyDown(e);
    const { open } = this.state;
    // We'll open the list when pressing the ArrowDown key
    if (!eventWasHandled && e.key === 'ArrowDown') {
      this._open();
      e.preventDefault();
      return;
    }

    // close on Escape
    if (e.key === 'Escape') {
      this._close();
      e.preventDefault();
    }

    // prevent TextButton onClick event
    if (open && (e.key === 'Enter' || e.key === 'Spacebar' || e.key === ' ')) {
      e.preventDefault();
    }
  };

  _close = () => {
    this.setState({ open: false });
  };

  _open = () => {
    this.setState({ open: true });
  };

  render() {
    const {
      className,
      caption,
      options,
      dataHook,
      selectedId,
      ariaLabel,
      ariaLabelledBy,
    } = this.props;

    const { open } = this.state;

    const finalAriaLabel = ariaLabel ? `${ariaLabel} ${caption}` : undefined;

    return (
      <div className={st(classes.root, className)}>
        <DropdownBase
          data-hook={dataHook}
          className={classes.dropdown}
          options={options}
          onClickOutside={this._close}
          dynamicWidth
          minWidth={120}
          selectedId={selectedId}
          onSelect={this._onSelect}
          focusOnSelectedOption
          open={open}
        >
          {({ delegateKeyDown }) => {
            return (
              <TextButton
                className={classes.caption}
                skin="dark"
                size="small"
                suffixIcon={<ChevronDown />}
                onClick={this._toggle}
                dataHook={`${dataHook}-button`}
                onKeyDown={e => this._onKeyDown(e, delegateKeyDown)}
                ariaLabel={finalAriaLabel}
                ariaLabelledBy={ariaLabelledBy}
                ariaHaspopup="listbox"
                ariaExpanded={open}
              >
                {caption}
              </TextButton>
            );
          }}
        </DropdownBase>
      </div>
    );
  }
}
