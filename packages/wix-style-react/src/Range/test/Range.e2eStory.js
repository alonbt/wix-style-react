import React from 'react';
import { storiesOf } from '@storybook/react';

import { getTestStoryKind } from '../../../stories/storiesHierarchy';
import { storySettings, testStories } from '../docs/storySettings';
import RangeTemplate from './RangeTemplate';

const kind = getTestStoryKind({
  category: storySettings.category,
  storyName: storySettings.storyName,
});

const ARBITRARY_FIXED_DATE = new Date('2018/01/01');
const onChange = () => undefined;

storiesOf(kind, module).add(testStories.range, () => (
  <div style={{ maxWidth: 400 }}>
    <RangeTemplate
      dataHook={storySettings.dataHookInput}
      rangeType={{ value: 'InputRange' }}
      onChange={onChange}
      withLabel
      label="With Input"
      firstInput={{
        placeholder: '0',
        resizable: false,
      }}
      lastInput={{
        placeholder: '0',
        resizable: false,
      }}
    />
    <RangeTemplate
      dataHook={storySettings.dataHookDatePicker}
      rangeType={{ value: 'DateRange' }}
      onChange={onChange}
      withLabel
      label="With DatePicker"
      firstDate={{
        value: ARBITRARY_FIXED_DATE,
        onChange,
      }}
      lastDate={{
        value: ARBITRARY_FIXED_DATE,
        onChange,
      }}
    />
  </div>
));
