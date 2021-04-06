import React from 'react';
import { storiesOf } from '@storybook/react';

import { getTestStoryKind } from '../../../stories/storiesHierarchy';
import { testStories, storySettings } from '../docs/storySettings';
import ExampleDatePicker from '../docs/ExampleDatePicker';

const kind = getTestStoryKind(storySettings);

storiesOf(kind, module).add(testStories.datepicker, () => {
  return (
    <div>
      <ExampleDatePicker />
    </div>
  );
});

storiesOf(kind, module).add(testStories.notClosing, () => {
  return (
    <div>
      <ExampleDatePicker shouldCloseOnSelect={false} />
    </div>
  );
});

storiesOf(kind, module).add(testStories.withDropdowns, () => {
  return (
    <div>
      <ExampleDatePicker showYearDropdown showMonthDropdown />
    </div>
  );
});
