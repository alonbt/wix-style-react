import React from 'react';
import PropTypes from 'prop-types';
import { classes } from './Center.st.css';

class Center extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children } = this.props;
    return <div className={classes.center}>{children}</div>;
  }
}

export default Center;
