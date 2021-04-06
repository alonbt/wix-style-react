import * as React from 'react';
import { Counter } from '../Counter';

export const CounterPerf = () => {
  return (
    <Counter
      onChange={() => {}}
      value={10}
      decrementAriaLabel={'decrementAriaLabel'}
      incrementAriaLabel={'incrementAriaLabel'}
      inputAriaLabel={'inputAriaLabel'}
    />
  );
};
