import React from 'react';
import PropTypes from 'prop-types';
import { st, classes } from './Cell.st.css';

/** Cell */
class Cell extends React.PureComponent {
  state = { isHovered: false };

  _setHover(isHovered) {
    this.setState({ isHovered: isHovered });
  }

  render() {
    const { dataHook, children, disableHighlight } = this.props;
    const { isHovered } = this.state;

    return (
      <div
        data-hook={dataHook}
        className={st(classes.root, {
          highlight: !disableHighlight && isHovered,
        })}
        onMouseEnter={() => this._setHover(true)}
        onMouseLeave={() => this._setHover(false)}
      >
        {children}
      </div>
    );
  }
}

Cell.displayName = 'Cell';

Cell.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** Disable highlight  */
  disableHighlight: PropTypes.bool,

  /** Children  */
  children: PropTypes.any.isRequired,
};

Cell.defaultProps = {
  disableHighlight: false,
  children: null,
};

export default Cell;
