import * as React from 'react';
import { CalendarPopover } from '..';

export const CalendarPopoverPerf = () => {
  return (
    <CalendarPopover
      isShown
      title="Today Events"
      onClose={() => {}}
      closeAriaLabel="close"
    >
      Popover content
    </CalendarPopover>
  );
};
