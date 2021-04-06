import React from 'react';
import color from 'color';
import clamp from 'lodash/clamp';
import PropTypes from 'prop-types';
import { classes } from './ColorPickerHsb.st.css';

class ColorPickerHsb extends React.PureComponent {
  static propTypes = {
    /** Applied as data-hook HTML attribute that can be used to create driver in testing */
    dataHook: PropTypes.string,

    /** The current Hsb value */
    current: PropTypes.object.isRequired,

    /** A callback function that will be triggered when the value is changed */
    onChange: PropTypes.func.isRequired,
  };

  onMarkerDragStart = e => {
    e.preventDefault();
    window.addEventListener('mousemove', this.setNewColorByMouseEvent);
    window.addEventListener('touchmove', this.setNewColorByMouseEvent);
    window.addEventListener('mouseup', this.onMarkerDragEnd);
    window.addEventListener('touchend', this.onMarkerDragEnd);
    window.addEventListener('touchcancel', this.onMarkerDragEnd);

    this.gradientRect = this.gradient.getBoundingClientRect();
    this.setNewColorByMouseEvent(e);
  };

  onMarkerDragEnd = () => {
    window.removeEventListener('touchmove', this.setNewColorByMouseEvent);
    window.removeEventListener('mousemove', this.setNewColorByMouseEvent);
    window.removeEventListener('touchcancel', this.onMarkerDragEnd);
    window.removeEventListener('touchend', this.onMarkerDragEnd);
    window.removeEventListener('mouseup', this.onMarkerDragEnd);
  };

  getSVByMouseEvent = e => {
    let eventX = 0;
    let eventY = 0;

    if (e.clientX) {
      eventX = e.clientX;
      eventY = e.clientY;
    } else {
      eventX = e.touches[0].clientX;
      eventY = e.touches[0].clientY;
    }

    const x = eventX - this.gradientRect.left;
    const y = eventY - this.gradientRect.top;

    const s = clamp((100 * x) / this.gradientRect.width, 0, 100);
    const v = clamp(100 - (100 * y) / this.gradientRect.height, 0, 100);

    return { s, v };
  };

  setNewColorByMouseEvent = e => {
    const { onChange, current } = this.props;
    const { s, v } = this.getSVByMouseEvent(e);
    onChange(color({ h: current.hue(), s, v }));
  };

  componentWillUnmount() {
    this.onMarkerDragEnd();
  }

  render() {
    const { dataHook, current } = this.props;
    const hue = current.saturationv(100).lightness(50);
    const style = {
      left: `${current.saturationv()}%`,
      top: `${100 - current.value()}%`,
    };
    return (
      <div
        className={classes.root}
        data-hook={dataHook}
        ref={e => (this.gradient = e)}
        onMouseDown={this.onMarkerDragStart}
        onTouchStart={this.onMarkerDragStart}
      >
        <div className={classes.hue} style={{ background: hue.hex() }} />
        <div className={classes.saturation} />
        <div className={classes.brightness} />
        <div className={classes.handle} style={style} />
      </div>
    );
  }
}

export default ColorPickerHsb;
