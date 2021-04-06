/* eslint-disable react/prop-types */

import React from 'react';
import { storiesOf } from '@storybook/react';

import { getTestStoryKind } from '../../../stories/storiesHierarchy';
import { storySettings, testStories } from './storySettings';
import InputArea from '../InputArea';

const kind = getTestStoryKind(storySettings);

storiesOf(kind, module).add(testStories.autoGrow, () => (
  <InputArea dataHook={storySettings.dataHook} autoGrow />
));

storiesOf(kind, module).add(testStories.autoGrowWithRows, () => (
  <InputArea dataHook={storySettings.dataHook} autoGrow rows={3} />
));

storiesOf(kind, module).add(testStories.minRowsAutoGrow, () => (
  <InputArea dataHook={storySettings.dataHook} autoGrow minRowsAutoGrow={1} />
));
