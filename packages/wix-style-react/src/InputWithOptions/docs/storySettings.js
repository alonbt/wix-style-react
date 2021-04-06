import { Category } from '../../../stories/storiesHierarchy';

export const storySettings = {
  storyName: 'InputWithOptions',
  category: Category.COMPONENTS,
};

export const focusStorySettings = {
  ...storySettings,
  dataHook: 'input-with-options-focus',
  listItemEditableDataHook: 'input-with-options-focus-list-item-editable',
};

export const tabSwitchesStorySettings = {
  ...storySettings,
  dataHook: 'input-with-options-tabs-switches-test',
};

export const insideFormStorySettings = {
  ...storySettings,
  dataHook: 'input-with-options-inside-form',
};

export const testStories = {
  focus: 'Element focus',
  tabsSwitches: 'Tabs switches',
  insideWrappingForm: 'Inside Wrapping Form',
};
