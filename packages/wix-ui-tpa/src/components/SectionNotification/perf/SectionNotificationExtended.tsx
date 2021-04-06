import * as React from 'react';
import { SectionNotification } from '../SectionNotification';
import { classes } from './SectionNotificationExtended.st.css';

export const SectionNotificationPerf = () => {
  return (
    <SectionNotification className={classes.root}>
      <SectionNotification.Text>Notification</SectionNotification.Text>
    </SectionNotification>
  );
};
