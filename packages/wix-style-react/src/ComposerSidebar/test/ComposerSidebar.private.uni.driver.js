import { composerSidebarDriverFactory as publicDriverFactory } from '../ComposerSidebar.uni.driver';

export const composerSidebarPrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),
  };
};
