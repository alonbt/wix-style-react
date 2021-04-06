/* eslint-disable react/prop-types */

import React from 'react';
import { storiesOf } from '@storybook/react';

import { getTestStoryKind } from '../../../stories/storiesHierarchy';
import {
  focusStorySettings,
  tabSwitchesStorySettings,
  insideFormStorySettings,
  testStories,
} from '../docs/storySettings';
import TestFocus from '../docs/tests/TestFocus';
import TestTabSwitches from '../docs/tests/TestTabSwitches';
import TestInsideWrapperForm from '../docs/tests/TestInsideWrapperForm';

const focusKind = getTestStoryKind({
  storyName: focusStorySettings.storyName,
  category: focusStorySettings.category,
});

storiesOf(focusKind, module).add(testStories.focus, () => <TestFocus />);

const tabSwitchesKind = getTestStoryKind({
  storyName: tabSwitchesStorySettings.storyName,
  category: tabSwitchesStorySettings.category,
});

const TestContainer = ({ children }) => (
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: '#f0f4f7',
    }}
  >
    {children}
  </div>
);

storiesOf(tabSwitchesKind, module).add(testStories.tabsSwitches, () => (
  <TestContainer>
    <input data-hook="input-for-focus-1" />
    <TestTabSwitches />
    <input data-hook="input-for-focus-2" />
  </TestContainer>
));

const insideFormKind = getTestStoryKind({
  storyName: insideFormStorySettings.storyName,
  category: insideFormStorySettings.category,
});

storiesOf(insideFormKind, module).add(testStories.insideWrappingForm, () => (
  <TestInsideWrapperForm />
));
