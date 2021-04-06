import * as React from 'react';
import { CalendarCell, Times } from '../';

export const CalendarCellPerf = () => {
  return <CalendarCell timeType={Times.pastDate} title={'17'} />;
};
