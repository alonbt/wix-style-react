import React from 'react';
import color from 'color';
import PropTypes from 'prop-types';

import ColorPickerHsb from './ColorPickerHsb';
import ColorPickerHue from './ColorPickerHue';
import ColorPickerHistory from './ColorPickerHistory';
import ColorPickerConverter from './ColorPickerConverter';
import ColorPickerActions from './ColorPickerActions';

import { classes } from './ColorPicker.st.css';
import { safeColor, isTransparent } from './utils';
import { DataHooks } from './constants';

const FALLBACK_COLOR = color('#86c6e5');

/**
 * Color Picker
 *
 * Under the hood uses color manipulation library [https://github.com/Qix-/color](https://github.com/Qix-/color).
 * Value for this component can be given in `string` or `object` format.
 * The callbacks always respond with color `object` format.
 */
class ColorPicker extends React.PureComponent {
  constructor(props) {
    super(props);

    const _color = safeColor(props.value, props.allowEmpty) || FALLBACK_COLOR;
    this.state = { current: _color, previous: _color };
  }

  render() {
    const {
      showHistory,
      showInput,
      showConverter,
      children,
      value,
      onAdd,
      addTooltipContent,
      allowEmpty,
      emptyPlaceholder,
      dataHook,
    } = this.props;
    const { current, previous } = this.state;

    return (
      <div className={classes.root} data-hook={dataHook}>
        <ColorPickerHsb
          dataHook={DataHooks.hsb}
          current={current}
          onChange={this.change}
        />
        <ColorPickerHue
          dataHook={DataHooks.hue}
          current={current}
          onChange={this.change}
        />
        <ColorPickerHistory
          show={showHistory}
          current={current}
          previous={previous}
          onClick={this.change}
        />
        <ColorPickerConverter
          dataHook={DataHooks.converter}
          showConverter={showConverter}
          showInput={showInput}
          current={current}
          onChange={this.change}
          onEnter={this.confirm}
          onAdd={onAdd}
          addTooltipContent={addTooltipContent}
          allowEmpty={allowEmpty}
          hexPlaceholder={emptyPlaceholder}
        />
        {children && (
          <div className={classes.children} data-hook={DataHooks.children}>
            {this._renderChildren()}
          </div>
        )}
        <ColorPickerActions
          disabled={!allowEmpty && value === ''}
          onConfirm={this.confirm}
          onCancel={this.cancel}
        />
      </div>
    );
  }

  _renderChildren = () => {
    const { children } = this.props;
    const childrenInterface = {
      changeColor: _color => {
        try {
          let colorObject = _color;
          if (typeof _color !== 'object') {
            colorObject = _color === '' ? color().fade(1) : color(_color);
          }
          this.change(colorObject);
        } catch (err) {}
      },
    };
    if (typeof children === 'function') {
      return children(childrenInterface);
    }
    return children;
  };

  UNSAFE_componentWillReceiveProps(props) {
    const _color = safeColor(props.value, props.allowEmpty);
    if (!_color) return;

    if (
      _color.hex() !== this.state.current.hex() ||
      isTransparent(_color) !== isTransparent(this.state.current)
    ) {
      this.setState({ current: _color });
    }
  }
  /**
   * sets the selected color
   * @param {object} color - An object that contains data for the selected color, model, and valpha.
   */
  change = _color => {
    this.setState({ current: _color }, () => {
      this.props.onChange(_color);
    });
  };
  /**
   * confirms the selected color
   */
  confirm = () => {
    this.setState({ previous: this.state.current });
    this.props.onConfirm(this.state.current);
  };

  /**
   * cancels the selected color
   */
  cancel = () => {
    this.props.onCancel(this.state.previous);
  };
}

ColorPicker.displayName = 'ColorPicker';

ColorPicker.propTypes = {
  /** Applied as data-hook HTML attribute that can be used to create driver in testing */
  dataHook: PropTypes.string,

  /** Current color, can be given in `string` or `object` format [https://github.com/Qix-/color](https://github.com/Qix-/color) */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,

  /** Should current/previous color be displayed */
  showHistory: PropTypes.bool,

  /** Should `HEX`/`RGB`/`HSB` converter tabs be displayed */
  showConverter: PropTypes.bool,

  /** Should color input (in `HEX` mode) be displayed. This is relevant only if `showConverter` is `true` */
  showInput: PropTypes.bool,

  /** Handle color change event. */
  onChange: PropTypes.func.isRequired,

  /** Handle cancel button click */
  onCancel: PropTypes.func.isRequired,

  /** Handle confirm button click */
  onConfirm: PropTypes.func.isRequired,

  /** Handle color add button click. If not passed plus icon is not visible. */
  onAdd: PropTypes.func,

  /** Children would be rendered above action buttons */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

  /** Content to show in add button tooltip. Does not appear if `onAdd` is not passed. */
  addTooltipContent: PropTypes.node,

  /** Allow to confirm when color is not selected. Returns color object with alpha equal to 0. */
  allowEmpty: PropTypes.bool,

  /** Placeholder to show in HEX input when `allowEmpty` is true */
  emptyPlaceholder: PropTypes.string,
};

ColorPicker.defaultProps = {
  showHistory: false,
  showConverter: true,
  showInput: true,
  allowEmpty: false,
};

export default ColorPicker;
