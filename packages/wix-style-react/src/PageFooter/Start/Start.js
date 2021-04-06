import React from 'react';
import PropTypes from 'prop-types';
import { classes } from './Start.st.css';

class Start extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children } = this.props;
    return <div className={classes.start}>{children}</div>;
  }
}

export default Start;
