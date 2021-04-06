import React from 'react';
import PropTypes from 'prop-types';

const FixedFooter = ({ children }) => React.cloneElement(children, {});

FixedFooter.displayName = 'Page.FixedFooter';

FixedFooter.propTypes = {
  children: PropTypes.element.isRequired,
};

export default FixedFooter;
