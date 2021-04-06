import React from 'react';
import PropTypes from 'prop-types';
import { classes } from '../Table.st.css';

/** TableSubtoolbar */
export const TableSubToolbar = ({ dataHook, children }) => {
  return (
    <div className={classes.tableSubToolbar} data-hook={dataHook}>
      {children}
    </div>
  );
};

TableSubToolbar.displayName = 'Table.SubToolbar';

TableSubToolbar.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** Any element to be rendered inside */
  children: PropTypes.node,
};
