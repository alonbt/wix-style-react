import React from 'react';
import CodeExample from 'wix-storybook-utils/CodeExample';
import Markdown from 'wix-storybook-utils/Markdown';
import MultiAreaListWithInsertionRulesReadme from './MultiAreaListWithInsertionRules.md';
import MultiAreaListWithInsertionRules from './MultiAreaListWithInsertionRules';
import MultiAreaListWithInsertionRulesRaw from '!raw-loader!./MultiAreaListWithInsertionRules';

export default () => (
  <div>
    <Markdown source={MultiAreaListWithInsertionRulesReadme} />
    <CodeExample
      title="Sortable List - D&D between columns"
      code={MultiAreaListWithInsertionRulesRaw}
    >
      <MultiAreaListWithInsertionRules />
    </CodeExample>
  </div>
);
