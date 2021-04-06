import React from 'react';
import PropTypes from 'prop-types';
import { st, classes } from './styles.st.css';

const Cell = ({ span, rows, children, vertical }) => (
  <div
    style={{
      gridColumn: `span ${span}`,
      gridRow: `span ${rows}`,
    }}
    className={st(classes.root, { vertical })}
    children={children}
  />
);

Cell.displayName = 'Cell';

Cell.propTypes = {
  /** any node to be rendered inside */
  children: PropTypes.node,

  /** how many columns should this cell occupy. Can be any number from 1 to 12 inclusive */
  span: PropTypes.number,

  /** whether to align children vertically to the middle */
  vertical: PropTypes.bool,

  /** how many rows should this cell occupy */
  rows: PropTypes.number,
};

Cell.defaultProps = {
  span: 12,
  rows: 1,
};

export default Cell;
