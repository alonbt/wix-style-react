import React from 'react';
import CodeExample from 'wix-storybook-utils/CodeExample';
import Markdown from 'wix-storybook-utils/Markdown';
import MultiAreaListWithSortableColumnsReadme from './MultiAreaListWithSortableColumnsReadme.md';
import MultiAreaListWithSortableColumns from './MultiAreaListWithSortableColumns';
import MultiAreaListWithSortableColumnsRaw from '!raw-loader!./MultiAreaListWithSortableColumns';

export default () => (
  <div>
    <Markdown source={MultiAreaListWithSortableColumnsReadme} />
    <CodeExample
      title="Sortable List - Draggable columns"
      code={MultiAreaListWithSortableColumnsRaw}
    >
      <MultiAreaListWithSortableColumns />
    </CodeExample>
  </div>
);
