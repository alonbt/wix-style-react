import React from 'react';
import CodeExample from 'wix-storybook-utils/CodeExample';
import Markdown from 'wix-storybook-utils/Markdown';
import MultiAreaListPreventDroppingReadme from './MultiAreaListPreventDroppingReadme.md';
import MultiAreaListPreventDropping from './MultiAreaListPreventDropping';
import MultiAreaListPreventDroppingRaw from '!raw-loader!./MultiAreaListPreventDropping';

export default () => (
  <div>
    <Markdown source={MultiAreaListPreventDroppingReadme} />
    <CodeExample
      title="Sortable List - D&D between columns"
      code={MultiAreaListPreventDroppingRaw}
    >
      <MultiAreaListPreventDropping />
    </CodeExample>
  </div>
);
