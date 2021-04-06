import { Category } from '../../../stories/storiesHierarchy';

export const storySettings = {
  category: Category.COMPONENTS,
  storyName: 'Avatar',
  dataHook: 'storybook-avatar',
  testStories: {
    SIZES: '1. Avatar sizes',
    COLORS: '2. Avatar colors',
    PLACEHOLDER: '3. Avatar placeholder',
  },
};
