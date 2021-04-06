import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';

import { st, classes } from './ColorPickerConverter.st.css';
import ColorPickerConverterViewer from './ColorPickerConverterViewer';
import { safeColor, getHexOrEmpty } from './utils';

export default class ColorPickerConverterHex extends React.PureComponent {
  static propTypes = {
    current: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
  };

  state = {
    hex: getHexOrEmpty(this.props.current),
    inFocus: false,
  };

  render() {
    const { dataHook } = this.props;
    return (
      <div className={st(classes.root)} data-hook={dataHook}>
        <Input
          size="small"
          value={this.state.hex}
          placeholder={this.props.placeholder}
          onChange={this.change}
          onFocus={this.handleOnFocus}
          onBlur={this.handleOnBlur}
          onKeyDown={this.handleKeyDown}
          className={classes.colorInput}
        />
        <ColorPickerConverterViewer
          {...this.props}
          color={this.props.current}
        />
      </div>
    );
  }

  UNSAFE_componentWillReceiveProps(props) {
    const hex = getHexOrEmpty(props.current);
    if (!this.state.inFocus && this.state.hex !== hex) {
      this.setState({
        hex,
      });
    }
  }

  change = ({ target: { value } }) => {
    this.setState({ hex: value }, () => {
      const _color = safeColor(value, this.props.allowEmpty);
      if (_color) {
        this.props.onChange(_color);
      }
    });
  };

  handleOnFocus = () => {
    this.setState({
      inFocus: true,
    });
  };

  handleOnBlur = () => {
    this.setState({
      inFocus: false,
      hex: getHexOrEmpty(this.props.current),
    });
  };

  handleKeyDown = event => {
    const { key } = event;

    if (key === 'Enter') {
      this.props.onEnter();
    }
  };
}
