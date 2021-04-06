import React from 'react';
import CodeExample from 'wix-storybook-utils/CodeExample';
import Markdown from 'wix-storybook-utils/Markdown';
import SingleAreaListReadme from './SingleAreaListReadme.md';
import SingleAreaList from './SingleAreaList';
import SingleAreaListRaw from '!raw-loader!./SingleAreaList';

export default () => (
  <div>
    <Markdown source={SingleAreaListReadme} />
    <CodeExample title="ListWithDelay" code={SingleAreaListRaw}>
      <SingleAreaList />
    </CodeExample>
    <CodeExample title="ListWithDelay with handle" code={SingleAreaListRaw}>
      <SingleAreaList withHandle />
    </CodeExample>
  </div>
);
