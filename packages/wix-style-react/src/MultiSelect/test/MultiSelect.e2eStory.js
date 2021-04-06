import React from 'react';
import { storiesOf } from '@storybook/react';

import { getTestStoryKind } from '../../../stories/storiesHierarchy';
import { storySettings, testStories } from '../docs/storySettings';
import { RTLWrapper } from '../../../stories/utils/RTLWrapper';
import MultiSelect from '..';

import ExampleReorderable from '../docs/tests/Reorderable';
import TestTabsSwitches from '../docs/tests/TestTabsSwitches';
import StateSelection from '../docs/tests/StateSelection';

const kind = getTestStoryKind({
  category: storySettings.category,
  storyName: storySettings.storyName,
});

const MultiSelectTests = storiesOf(kind, module);
MultiSelectTests.add(testStories.withMaxNumRows, () => (
  <RTLWrapper>
    <div style={{ width: '400px' }}>
      numOfRows=2:
      <MultiSelect
        dataHook="multi-select-limited"
        tags={[
          { id: '1', label: 'aaaaaaaaaaaa' },
          { id: '2', label: 'aaaaaaaaaaaa' },
          { id: '3', label: 'aaaaaaaaaaaa' },
          { id: '4', label: 'aaaaaaaaaaaa' },
          { id: '5', label: 'aaaaaaaaaaaa' },
          { id: '6', label: 'aaaaaaaaaaaa' },
        ]}
        maxNumRows={2}
      />
    </div>
  </RTLWrapper>
));

MultiSelectTests.add(testStories.reorderable, () => (
  <RTLWrapper>
    <ExampleReorderable />
  </RTLWrapper>
));

MultiSelectTests.add(testStories.tabsSwitches, () => (
  <div>
    <input data-hook="input-for-focus-1" />
    <TestTabsSwitches />
    <input data-hook="input-for-focus-2" />
  </div>
));

MultiSelectTests.add(testStories.stateMultiSelect, () => (
  <StateSelection dataHook={storySettings.dataHook} />
));
