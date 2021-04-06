import React from 'react';
import PropTypes from 'prop-types';
import { st, classes } from './Pagination.st.css';

const Pagination = ({ className, originalClassName, pages }) => (
  <div className={st(classes.root, className, originalClassName)}>
    {pages.map(page => _withDotClass(page))}
  </div>
);

const _withDotClass = comp => {
  const { className } = comp.props;
  return React.cloneElement(comp, { className: st(classes.dot, className) });
};

Pagination.propTypes = {
  className: PropTypes.string,
};

Pagination.displayName = 'Pagination';

export default Pagination;
