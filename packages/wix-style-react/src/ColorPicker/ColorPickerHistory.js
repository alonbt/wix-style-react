import React from 'react';
import PropTypes from 'prop-types';

import { DataHooks } from './constants';
import { classes } from './ColorPickerHistory.st.css';

const ColorPickerHistory = ({ show, current, previous, onClick }) => {
  if (show) {
    return (
      <div className={classes.root} data-hook={DataHooks.history}>
        <div
          data-hook={DataHooks.historyPrevious}
          style={{ background: previous.hex() }}
          onClick={() => onClick(previous)}
        />
        <div
          data-hook={DataHooks.historyCurrent}
          style={{ background: current.hex() }}
        />
      </div>
    );
  }
  return null;
};

ColorPickerHistory.propTypes = {
  show: PropTypes.bool.isRequired,
  previous: PropTypes.object.isRequired,
  current: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ColorPickerHistory;
