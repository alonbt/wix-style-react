import React from 'react';
import CodeExample from 'wix-storybook-utils/CodeExample';
import Markdown from 'wix-storybook-utils/Markdown';
import ListWithDelayReadme from './ListWithDelayReadme.md';
import ListWithDelay from './ListWithDelay';
import ListWithDelayRaw from '!raw-loader!./ListWithDelay';

export default () => (
  <div>
    <Markdown source={ListWithDelayReadme} />
    <CodeExample title="SortableList" code={ListWithDelayRaw}>
      <ListWithDelay />
    </CodeExample>
  </div>
);
