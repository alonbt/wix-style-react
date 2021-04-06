import React from 'react';
import { storiesOf } from '@storybook/react';

import { getTestStoryKind } from '../../../stories/storiesHierarchy';

import { testStories, storySettings } from '../docs/storySettings';

import FilePicker from '..';

const kind = getTestStoryKind(storySettings);

const defaultProps = {
  mainLabel: 'Choose File',
  subLabel: 'No file chosen (Max size 5 MB)',
  onChange: file => file.name,
};

storiesOf(kind, module).add(testStories.filePicker, () => {
  return (
    <div>
      <FilePicker {...defaultProps} dataHook={storySettings.dataHook} />
    </div>
  );
});
