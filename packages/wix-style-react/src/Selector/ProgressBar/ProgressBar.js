import React from 'react';
import PropTypes from 'prop-types';
import { classes } from './ProgressBar.st.css';
import Heading from '../../Heading';

class ProgressBar extends React.PureComponent {
  render() {
    const { dataHook, progress } = this.props;
    return (
      <div data-hook={dataHook} className={classes.root}>
        <Heading appearance="H6">{`${progress}%`}</Heading>
        <span className={classes.bar}>
          <span className={classes.value} style={{ width: progress + '%' }} />
          <span
            className={classes.leftover}
            style={{ width: 100 - progress + '%' }}
          />
        </span>
      </div>
    );
  }
}

ProgressBar.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,
  /** Percentage of the progress, value should be between 0 to 100 */
  progress: PropTypes.number.isRequired,
};

export default ProgressBar;
