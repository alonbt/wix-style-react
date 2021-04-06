import React from 'react';
import { st, classes } from './FunnelBar.st.css';

export const FunnelBar = ({ height, dataHook }) => {
  return (
    <div className={st(classes.root)} data-hook={dataHook}>
      <div style={{ height: `${height}%` }} className={classes.filledBar} />
    </div>
  );
};
