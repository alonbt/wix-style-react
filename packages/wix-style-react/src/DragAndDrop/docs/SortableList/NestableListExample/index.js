import React from 'react';
import CodeExample from 'wix-storybook-utils/CodeExample';
import Markdown from 'wix-storybook-utils/Markdown';
import NestableListReadme from './NestableListReadme.md';
import NestableListExample from './NestableListExample';
import NestableListRaw from '!raw-loader!./NestableListExample';

export default () => (
  <div>
    <Markdown source={NestableListReadme} />
    <CodeExample title="NestableList with handle" code={NestableListRaw}>
      <NestableListExample />
    </CodeExample>
  </div>
);
