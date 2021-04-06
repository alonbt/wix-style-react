import { sidebarHeaderDriverFactory as publicDriverFactory } from '../SidebarHeader.uni.driver';

export const sidebarHeaderPrivateDriverFactory = base => {
  return {
    ...publicDriverFactory(base),

    // Add here driver methods that considered "private"
  };
};
