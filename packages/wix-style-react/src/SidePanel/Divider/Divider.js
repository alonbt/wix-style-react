import React from 'react';
import { classes } from './Divider.st.css';

class Divider extends React.PureComponent {
  static displayName = 'Divider';

  render() {
    return <div className={classes.root} />;
  }
}

export default Divider;
