import React from 'react';
import color from 'color';
import clamp from 'lodash/clamp';
import PropTypes from 'prop-types';
import { classes } from './ColorPickerHue.st.css';

export default class ColorPickerHue extends React.PureComponent {
  static propTypes = {
    /** Applied as data-hook HTML attribute that can be used to create driver in testing */
    dataHook: PropTypes.string,

    /** The current Hue value */
    current: PropTypes.object.isRequired,

    /** A callback function that will be triggered when the value is changed */
    onChange: PropTypes.func.isRequired,
  };

  onMarkerDragStart = e => {
    e.preventDefault();
    window.addEventListener('mousemove', this.setNewColorByMouseEvent);
    window.addEventListener('touchmove', this.setNewColorByMouseEvent);
    window.addEventListener('mouseup', this.onMarkerDragEnd);
    window.addEventListener('touchcancel', this.onMarkerDragEnd);
    window.addEventListener('touchend', this.onMarkerDragEnd);

    this.sliderRect = this.slider.getBoundingClientRect();
    this.setNewColorByMouseEvent(e);
  };

  onMarkerDragEnd = () => {
    window.removeEventListener('touchmove', this.setNewColorByMouseEvent);
    window.removeEventListener('mousemove', this.setNewColorByMouseEvent);
    window.removeEventListener('touchcancel', this.onMarkerDragEnd);
    window.removeEventListener('touchend', this.onMarkerDragEnd);
    window.removeEventListener('mouseup', this.onMarkerDragEnd);
  };

  getHueByMouseEvent = e => {
    let eventX = 0;
    if (e.clientX) {
      eventX = e.clientX;
    } else {
      eventX = e.touches[0].clientX;
    }
    const x = eventX - this.sliderRect.left;
    return clamp((360 * x) / this.sliderRect.width, 0, 359);
  };

  setNewColorByMouseEvent = e => {
    const { onChange, current } = this.props;
    const h = this.getHueByMouseEvent(e);
    onChange(color({ h, s: current.saturationv(), v: current.value() }));
  };

  componentWillUnmount() {
    this.onMarkerDragEnd();
  }

  render() {
    const { dataHook, current } = this.props;
    // HUE is an integer value from 0 to 360.
    const percentage = (current.hue() / 360) * 100;
    return (
      <div
        className={classes.root}
        data-hook={dataHook}
        ref={e => (this.slider = e)}
        onMouseDown={this.onMarkerDragStart}
        onTouchStart={this.onMarkerDragStart}
      >
        <div className={classes.handle} style={{ left: `${percentage}%` }} />
      </div>
    );
  }
}
