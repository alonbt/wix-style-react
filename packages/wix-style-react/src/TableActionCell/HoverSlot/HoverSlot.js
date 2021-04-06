import React from 'react';
import PropTypes from 'prop-types';
import { st, classes } from '../TableActionCell.st.css';

const HoverSlot = ({ display, children, ...props }) => (
  <span className={st(classes.hoverSlot, classes[display])} {...props}>
    {children}
  </span>
);

HoverSlot.propTypes = {
  display: PropTypes.oneOf(['always', 'onHover', 'notOnHover']),
  children: PropTypes.node,
};

export default HoverSlot;
