import React from 'react';
import PropTypes from 'prop-types';
import InputConsumer from '../InputConsumer';
import { classes } from './Group.st.css';

const Group = ({ children }) => (
  <InputConsumer consumerCompName={Group.displayName}>
    {() => <div className={classes.root}>{children}</div>}
  </InputConsumer>
);

Group.displayName = 'Input.Group';
Group.propTypes = {
  children: PropTypes.node,
};

export default Group;
