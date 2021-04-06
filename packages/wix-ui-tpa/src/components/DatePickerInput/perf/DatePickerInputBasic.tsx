import * as React from 'react';
import { DatePickerInput } from '../';

export const DatePickerInputPerf = () => {
  return <DatePickerInput value={new Date()} onChange={() => {}} />;
};
