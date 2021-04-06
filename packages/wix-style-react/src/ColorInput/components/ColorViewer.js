import React from 'react';

import Popover from '../../Popover';
import ColorPicker from '../../ColorPicker';
import DATA_HOOKS from '../DataHooks';

import { st, classes } from './ColorViewer.st.css';
import Color from 'color';

export class ColorViewer extends React.Component {
  static defaultProps = {
    popoverProps: {},
  };

  onChange = _color => {
    const color = typeof _color === 'object' ? _color : Color(_color);
    this.props.onChange(color.alpha() === 0 ? '' : color.hex());
  };

  render() {
    const {
      value,
      disabled,
      active,
      onClick,
      onConfirm,
      onCancel,
      size,
      placement,
      appendTo,
      onClickOutside,
      children,
      onAddColor,
      addTooltipContent,
      placeholder,
      popoverProps,
    } = this.props;
    return (
      <Popover
        {...popoverProps}
        showArrow
        fixed
        dataHook={DATA_HOOKS.COLOR_INPUT_POPOVER}
        shown={active}
        placement={placement}
        appendTo={appendTo}
        onClickOutside={active ? onClickOutside : null}
      >
        <Popover.Element>
          <div
            data-hook={DATA_HOOKS.COLOR_INPUT_VIEWER}
            onClick={disabled ? undefined : onClick}
            style={{ backgroundColor: value }}
            className={st(classes.root, { size })}
            data-size={size}
          >
            {value === '' && (
              <div
                data-hook={DATA_HOOKS.COLOR_INPUT_VIEWER_LINE}
                className={classes.line}
              />
            )}
          </div>
        </Popover.Element>
        <Popover.Content>
          <ColorPicker
            dataHook={DATA_HOOKS.COLOR_INPUT_COLOR_PICKER}
            showConverter={false}
            showInput
            onCancel={onCancel}
            onChange={this.onChange}
            onConfirm={onConfirm}
            value={value}
            onAdd={onAddColor}
            allowEmpty
            addTooltipContent={addTooltipContent}
            emptyPlaceholder={placeholder}
          >
            {children}
          </ColorPicker>
        </Popover.Content>
      </Popover>
    );
  }
}
