import { floatingNotificationDriverFactory as publicDriverFactory } from './FloatingNotification.uni.driver';

export const floatingNotificationPrivateDriverFactory = base => {
  return {
    ...publicDriverFactory(base),

    // Add here driver methods that considered "private"
  };
};
