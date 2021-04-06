import React from 'react';
import CodeExample from 'wix-storybook-utils/CodeExample';
import Markdown from 'wix-storybook-utils/Markdown';
import SingleAreaGridReadme from './SingleAreaGridReadme.md';
import SingleAreaGrid from './SingleAreaGrid';
import SingleAreaGridRaw from '!raw-loader!./SingleAreaGrid';
import { classes } from './SingleAreaGrid.st.css';

export default () => (
  <div>
    <Markdown source={SingleAreaGridReadme} />

    <CodeExample
      title="SortableGrid with fixed element"
      code={SingleAreaGridRaw}
    >
      <SingleAreaGrid
        startFixedElement={<div className={classes.item}>fixed elem</div>}
      />
    </CodeExample>
  </div>
);
