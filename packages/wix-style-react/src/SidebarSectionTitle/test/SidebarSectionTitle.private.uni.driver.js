import { sidebarSectionTitleDriverFactory as publicDriverFactory } from '../SidebarSectionTitle.uni.driver';

export const sidebarSectionTitlePrivateDriverFactory = base => {
  return {
    ...publicDriverFactory(base),

    // Add here driver methods that considered "private"
  };
};
