import React from 'react';
import CodeExample from 'wix-storybook-utils/CodeExample';
import Markdown from 'wix-storybook-utils/Markdown';
import MultiAreaListReadme from './MultiAreaListReadme.md';
import MultiAreaList from './MultiAreaList';
import MultiAreaListRaw from '!raw-loader!./MultiAreaList';

export default () => (
  <div>
    <Markdown source={MultiAreaListReadme} />
    <CodeExample
      title="Sortable List - D&D between columns"
      code={MultiAreaListRaw}
    >
      <MultiAreaList />
    </CodeExample>
  </div>
);
