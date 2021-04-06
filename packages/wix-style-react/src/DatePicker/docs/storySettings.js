import { Category } from '../../../stories/storiesHierarchy';

export const storySettings = {
  category: Category.COMPONENTS,
  storyName: 'DatePicker',
  dataHook: 'storybook-datepicker',
};

export const testStories = {
  datepicker: 'DatePicker',
  notClosing: 'Not closing on select',
  withDropdowns: 'DatePicker with dropdowns',
};
