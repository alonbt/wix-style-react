import React from 'react';
import PropTypes from 'prop-types';
import { classes } from '../../Tabs.st.css';

const SideContent = ({ content }) =>
  content ? (
    <div data-content="true" className={classes.sideContent}>
      {content}
    </div>
  ) : null;

SideContent.propTypes = {
  content: PropTypes.node,
};

export default SideContent;
