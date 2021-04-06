import React from 'react';
import { storiesOf } from '@storybook/react';

import { getTestStoryKind } from '../../../stories/storiesHierarchy';
import { storySettings, testStories } from '../docs/storySettings';
import RichTextInputArea from '../RichTextInputArea';

const kind = getTestStoryKind({
  category: storySettings.category,
  storyName: storySettings.storyName,
});

storiesOf(kind, module).add(testStories.richTextInputArea, () => (
  <RichTextInputArea
    dataHook={storySettings.dataHook}
    initialValue=""
    placeholder="Placeholder text"
  />
));
