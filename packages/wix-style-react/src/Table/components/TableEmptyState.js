import React from 'react';
import EmptyState from '../../EmptyState';

import { classes } from '../Table.st.css';

export const TableEmptyState = props => (
  <div className={classes.emptyStateContainer}>
    <EmptyState {...props} />
  </div>
);

TableEmptyState.displayName = 'Table.EmptyState';

TableEmptyState.propTypes = {
  ...EmptyState.propTypes,
};

TableEmptyState.defaultProps = {
  ...EmptyState.defaultProps,
};
