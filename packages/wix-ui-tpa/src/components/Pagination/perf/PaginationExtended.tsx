import * as React from 'react';
import { Pagination } from '../Pagination';
import { classes } from './PaginationExtended.st.css';

export const PaginationPerf = () => {
  return (
    <Pagination className={classes.root} totalPages={1} onChange={() => {}} />
  );
};
