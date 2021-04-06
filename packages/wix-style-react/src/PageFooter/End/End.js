import React from 'react';
import PropTypes from 'prop-types';
import { classes } from './End.st.css';

class End extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children } = this.props;
    return <div className={classes.end}>{children}</div>;
  }
}

export default End;
