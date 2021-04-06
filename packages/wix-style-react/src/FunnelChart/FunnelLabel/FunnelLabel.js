import React from 'react';
import PropTypes from 'prop-types';

import Text from '../../Text';
import { dataHooks } from '../constants';
import { classes } from './FunnelLabel.st.css';

export const FunnelLabel = ({ value, label, displayValue }) => {
  const numberToPresent = displayValue ? displayValue : value;
  return (
    <div className={classes.root}>
      <Text dataHook={dataHooks.labelValue} weight="bold" ellipsis>
        {numberToPresent}
      </Text>
      <Text dataHook={dataHooks.labelText} size="small" secondary ellipsis>
        {label}
      </Text>
    </div>
  );
};

FunnelLabel.propTypes = {
  /** Label's value */
  value: PropTypes.number,

  /** Label's content */
  label: PropTypes.string.isRequired,

  /** Label's value send by the user */
  displayValue: PropTypes.string,
};
