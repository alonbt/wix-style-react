import React from 'react';

import { ButtonNext } from 'wix-ui-core/dist/src/components/button-next';
import PropTypes from 'prop-types';
import Proportion from '../Proportion';

import { parseColor, parseGradient, parseUrl, parseElement } from './utils';
import { st, classes } from './FillPreview.st.css';

class FillPreview extends React.PureComponent {
  static displayName = 'FillPreview';

  _getBackground = fill => {
    const { disabled } = this.props;

    if (parseUrl(fill) && !disabled) {
      return {
        backgroundImage: `url('${fill}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      };
    }

    if (parseColor(fill) && !disabled) {
      return { backgroundColor: fill };
    }

    if (parseGradient(fill) && !disabled) {
      return {
        backgroundImage: fill,
      };
    }

    if (parseElement(fill) && !disabled) {
      return;
    }

    if (disabled) {
      return;
    }

    return {
      background: `linear-gradient(
        to top left,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 1) calc(50% - 0.8px),
        rgba(214, 69, 61, 1) 50%,
        rgba(255, 255, 255, 1) calc(50% + 0.8px),
        rgba(255, 255, 255, 1) 100%)`,
    };
  };

  render() {
    const {
      fill,
      onClick,
      selected,
      disabled,
      dataHook,
      aspectRatio,
      as,
      className,
      ...rest
    } = this.props;
    const background = this._getBackground(fill);
    return (
      <div className={st(classes.root, { selected }, className)}>
        <Proportion dataHook={dataHook} aspectRatio={aspectRatio}>
          <ButtonNext
            {...rest}
            as={as}
            data-selected={selected}
            className={classes.button}
            data-hook="fill-preview-button"
            style={background}
            onClick={onClick}
            disabled={disabled}
          >
            {!background && React.isValidElement(fill) && fill}
          </ButtonNext>
        </Proportion>
      </div>
    );
  }
}

FillPreview.propTypes = {
  /** Hook for testing purposes. */
  dataHook: PropTypes.string,

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,

  /** render as some other component or DOM tag */
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.string]),

  /** control focusability */
  tabIndex: PropTypes.number,

  /** Color, gradient, image url or svg to be rendered as a preview content */
  fill: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  /** Outlines the border when set to true */
  selected: PropTypes.bool,

  /** Pass your handler for click event */
  onClick: PropTypes.func,

  /** Puts the component into a disabled state */
  disabled: PropTypes.bool,

  /** Control elements aspect ratio value:  */
  aspectRatio: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FillPreview.defaultProps = {
  selected: false,
};

export default FillPreview;
