import * as React from 'react';
import { DatePicker } from '../';

export const DatePickerPerf = () => {
  return <DatePicker value={new Date()} onChange={() => {}} />;
};
