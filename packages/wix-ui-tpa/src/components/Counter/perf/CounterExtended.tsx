import * as React from 'react';
import { st, classes } from './CounterExtended.st.css';
import { Counter } from '../Counter';

export const CounterPerf = () => {
  return (
    <Counter
      onChange={() => {}}
      value={10}
      className={st(classes.root)}
      decrementAriaLabel={'decrementAriaLabel'}
      incrementAriaLabel={'incrementAriaLabel'}
      inputAriaLabel={'inputAriaLabel'}
    />
  );
};
