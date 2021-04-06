import * as React from 'react';
import { Popover, TriggerAction } from '../';
import { classes } from './PopoverExtended.st.css';

export const PopoverPerf = () => {
  return (
    <Popover
      placement={'top'}
      className={classes.root}
      triggerAction={TriggerAction.hover}
    >
      <Popover.Element>This is the Popover.Element</Popover.Element>
      <Popover.Content>This is the Popover.Content</Popover.Content>
    </Popover>
  );
};
