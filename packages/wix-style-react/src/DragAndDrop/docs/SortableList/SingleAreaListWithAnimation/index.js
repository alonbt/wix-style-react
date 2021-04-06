import React from 'react';
import CodeExample from 'wix-storybook-utils/CodeExample';
import Markdown from 'wix-storybook-utils/Markdown';
import SingleAreaListWithAnimationReadme from './SingleAreaListWithAnimationReadme.md';
import SingleAreaListWithAnimation from './SingleAreaListWithAnimation';
import SingleAreaListWithAnimationRaw from '!raw-loader!./SingleAreaListWithAnimation';

export default () => (
  <div>
    <Markdown source={SingleAreaListWithAnimationReadme} />
    <CodeExample title="SortableList" code={SingleAreaListWithAnimationRaw}>
      <SingleAreaListWithAnimation />
    </CodeExample>
  </div>
);
