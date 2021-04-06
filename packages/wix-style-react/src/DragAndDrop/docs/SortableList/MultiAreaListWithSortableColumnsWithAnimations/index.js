import React from 'react';
import CodeExample from 'wix-storybook-utils/CodeExample';
import Markdown from 'wix-storybook-utils/Markdown';
import MultiAreaListWithSortableColumnsWithAnimationsReadme from './MultiAreaListWithSortableColumnsWithAnimationsReadme.md';
import MultiAreaListWithSortableColumnsWithAnimations from './MultiAreaListWithSortableColumnsWithAnimations';
import MultiAreaListWithSortableColumnsWithAnimationsRaw from '!raw-loader!./MultiAreaListWithSortableColumnsWithAnimations';

export default () => (
  <div>
    <Markdown source={MultiAreaListWithSortableColumnsWithAnimationsReadme} />
    <CodeExample
      title="Sortable List - Draggable columns"
      code={MultiAreaListWithSortableColumnsWithAnimationsRaw}
    >
      <MultiAreaListWithSortableColumnsWithAnimations />
    </CodeExample>
  </div>
);
