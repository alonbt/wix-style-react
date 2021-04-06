import * as React from 'react';
import { CalendarPopover } from '..';
import { st, classes } from './CalendarPopoverExtended.st.css';

export const CalendarPopoverPerf = () => {
  return (
    <CalendarPopover
      isShown
      title="Today Events"
      onClose={() => {}}
      closeAriaLabel="close"
      className={st(classes.root)}
    >
      Popover content
    </CalendarPopover>
  );
};
