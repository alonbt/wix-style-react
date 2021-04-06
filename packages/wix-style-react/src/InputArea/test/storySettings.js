import { Category } from '../../../stories/storiesHierarchy';

export const storySettings = {
  category: Category.COMPONENTS,
  storyName: 'InputArea',
  dataHook: 'storybook-inputarea',
};

export const testStories = {
  autoGrow: 'auto grow',
  autoGrowWithRows: 'auto grow with 3 rows',
  minRowsAutoGrow: 'auto grow and minRowsAutoGrow',
};
