import React, { PureComponent } from 'react';
import { st, classes } from './SliderThumb.st.css';
import { dataHooks } from './constants';
import { withFocusable } from 'wix-ui-core/dist/src/hocs/Focusable/FocusableHOC';

class SliderThumb extends PureComponent {
  render() {
    const {
      hovered,
      disabled,
      focusableOnFocus,
      focusableOnBlur,
      className,
    } = this.props;

    return (
      <div
        className={st(classes.root, { disabled, hovered }, className)}
        onBlur={focusableOnBlur}
        onFocus={focusableOnFocus}
        tabIndex="0"
        data-hook={dataHooks.sliderThumb}
      />
    );
  }
}

export default withFocusable(SliderThumb);
