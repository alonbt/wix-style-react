import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { dataHooks } from './constants';
import { st, classes } from './SliderHandle.st.css';
import SliderThumb from './SliderThumb';

class SliderHandle extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false;

    this.state = {
      showTooltip: false,
      dragging: false,
      hovered: false,
    };

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.clickFocus = this.clickFocus.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
    document.addEventListener('mouseup', this.handleMouseUp);
  }

  componentWillUnmount() {
    this._isMounted = false;
    document.removeEventListener('mouseup', this.handleMouseUp);
  }

  clickFocus() {}

  handleMouseUp() {
    if (!this.state.hovered) {
      this.toggleTooltip(false);
    }
    this.setState({ dragging: false });
  }

  handleMouseDown() {
    this.toggleTooltip(true);
    this.setState({ dragging: true });
  }

  handleMouseEnter() {
    this.toggleTooltip(true);
    this.setState({ hovered: true });
  }

  handleMouseLeave() {
    if (!this.state.dragging) {
      this.toggleTooltip(false);
    }
    this.setState({ hovered: false });
  }

  toggleTooltip(showTooltip) {
    const { displayTooltip, disabled } = this.props;
    this._isMounted &&
      this.setState({
        showTooltip: displayTooltip && !disabled && showTooltip,
      });
  }

  render() {
    const { value, offset, disabled } = this.props;
    const { showTooltip, hovered, dragging } = this.state;

    return (
      <div
        className={st(classes.root, { disabled })}
        style={{ left: `${offset}%` }}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        data-hook={dataHooks.sliderHandle}
      >
        <SliderThumb disabled={disabled} hovered={hovered || dragging} />
        {showTooltip && value && (
          <div data-hook={dataHooks.sliderTooltip} className={classes.tooltip}>
            {value}
          </div>
        )}
      </div>
    );
  }
}

SliderHandle.propTypes = {
  disabled: PropTypes.bool,
  displayTooltip: PropTypes.bool,
  offset: PropTypes.number,
  value: PropTypes.string,
};

SliderHandle.defaultProps = {
  displayTooltip: true,
};

export default SliderHandle;
