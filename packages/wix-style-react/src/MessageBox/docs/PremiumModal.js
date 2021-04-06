import React from 'react';
import TabbedView from 'wix-storybook-utils/TabbedView';
import Markdown from 'wix-storybook-utils/Markdown';
import CodeExample from 'wix-storybook-utils/CodeExample';

import Readme from '../README.md';
import ReadmeTestKit from '../README.TESTKIT.md';

import StandardMessageBoxFunctionalLayout from './PremiumExample/Standard';
import StandardMessageBoxFunctionalLayoutRaw from '!raw-loader!./PremiumExample/Standard';

const introduction = `# Premium Modal (\`<MessageBoxFunctionalLayout/>\`)
import { MessageBoxFunctionalLayout  } "wix-style-react":
`;

const layoutStyles = {
  margin: '0 30px',
};

export default () => (
  <TabbedView tabs={['Usage', 'API', 'TestKits']}>
    <div>
      <Markdown source={introduction} />
      <div style={layoutStyles}>
        <CodeExample
          title="Premium"
          code={StandardMessageBoxFunctionalLayoutRaw}
          children={<StandardMessageBoxFunctionalLayout />}
        />
      </div>
    </div>

    <Markdown source={Readme} />

    <Markdown source={ReadmeTestKit} />
  </TabbedView>
);
