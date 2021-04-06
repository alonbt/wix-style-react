import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { getTestStoryKind } from '../../../stories/storiesHierarchy';
import { testStories, storySettings } from './storySettings';
import Search from '..';

const kind = getTestStoryKind(storySettings);

const StatefulSearch = () => {
  const [value, setValue] = useState('');
  return (
    <Search
      dataHook={storySettings.dataHook}
      options={Array(26)
        .fill(0)
        .map((_, id) => ({
          id,
          value: `Option ${String.fromCharCode(97 + id)}`,
        }))}
      showOptionsIfEmptyInput={false}
      closeOnSelect={false}
      value={value}
      onChange={e => setValue(e.target.value)}
      onClear={() => setValue('')}
      onSelect={option => setValue(option.value)}
      updateControlledOnClear
    />
  );
};

storiesOf(kind, module).add(testStories.search, () => <StatefulSearch />);
