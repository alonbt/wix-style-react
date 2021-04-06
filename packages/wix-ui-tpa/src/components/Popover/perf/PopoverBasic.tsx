import * as React from 'react';
import { Popover, TriggerAction } from '../';

export const PopoverPerf = () => {
  return (
    <Popover placement={'top'} triggerAction={TriggerAction.hover}>
      <Popover.Element>This is the Popover.Element</Popover.Element>
      <Popover.Content>This is the Popover.Content</Popover.Content>
    </Popover>
  );
};
