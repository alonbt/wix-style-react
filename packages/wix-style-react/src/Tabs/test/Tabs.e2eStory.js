import React from 'react';
import { storiesOf } from '@storybook/react';

import { getTestStoryKind } from '../../../stories/storiesHierarchy';
import { testStories, storySettings } from '../docs/storySettings';
import TabsExample from './examples/TabsExample';

const kind = getTestStoryKind(storySettings);

storiesOf(kind, module).add(testStories.tabs, () => (
  <TabsExample onChange={() => {}} />
));
