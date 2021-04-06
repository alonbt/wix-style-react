import { Category } from '../../../stories/storiesHierarchy';

const kind = Category.DEPRECATED;
export const storySettings = {
  alert: {
    kind,
    story: '9.1 Alert',
  },
  destructive: {
    kind,
    story: '9.2 Destructive Alert',
  },
  custom: {
    kind,
    story: '9.3 Custom Modal',
  },
  announcement: {
    kind,
    story: '9.4 Announcement',
  },
  premium: {
    kind,
    story: '9.5 Premium Modal',
  },
};

export const testStories = {
  alert: 'alert',
  fullScreenModal: 'full screen modal',
};
