import React from 'react';
import { storiesOf } from '@storybook/react';

import { getTestStoryKind } from '../../../../stories/storiesHierarchy';
import { testStories, storySettings } from '../docs/storySettings';

import Example from '../docs/Example';
import ExampleCallingServer from '../docs/ExampleCallingServer';

const kind = getTestStoryKind(storySettings);

storiesOf(kind, module).add(testStories.dataTable, () => {
  return (
    <>
      <Example />
      <ExampleCallingServer />
    </>
  );
});
