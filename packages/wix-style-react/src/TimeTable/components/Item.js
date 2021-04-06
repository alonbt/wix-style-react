import React from 'react';
import PropTypes from 'prop-types';

import { st, classes } from './Item.st.css';

const Item = ({ disabled, draggable, children, className }) => (
  <div className={st(classes.root, { disabled, draggable }, className)}>
    {children}
  </div>
);

Item.displayName = 'TimeTable.Item';

Item.propTypes = {
  disabled: PropTypes.bool.isRequired,
  draggable: PropTypes.bool.isRequired,
};

export default Item;
