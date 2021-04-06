import { calendarPanelFooterDriverFactory as publicDriverFactory } from './CalendarPanelFooter.uni.driver';

export const calendarPanelFooterPrivateDriverFactory = base => {
  return {
    ...publicDriverFactory(base),

    // Add here driver methods that considered "private"
  };
};
