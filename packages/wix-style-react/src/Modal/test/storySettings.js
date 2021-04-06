import { Category } from '../../../stories/storiesHierarchy';

export const storySettings = {
  category: Category.COMPONENTS,
  storyName: 'Modal',
  dataHook: 'storybook-modal',
};

export const testStories = {
  modalBackgroundScroll: 'Prevent modal background scroll',
  a11yTabInsideModal: 'A11Y - Allow tab navigation',
};
