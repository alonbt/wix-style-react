import { SidebarDividerDriverFactory as publicDriverFactory } from '../SidebarDivider.uni.driver';

export const SidebarDividerPrivateDriverFactory = base => {
  return {
    ...publicDriverFactory(base),

    // Add here driver methods that considered "private"
  };
};
