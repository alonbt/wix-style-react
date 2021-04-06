import React from 'react';
import { header, description, code } from 'wix-storybook-utils/Sections';

import Playground from 'wix-storybook-utils/Playground';
import LayoutList from 'wix-ui-icons-common/LayoutList';
import LayoutListWithPanel from 'wix-ui-icons-common/LayoutListWithPanel';

import allComponents, { themes } from '../utils/allComponents';
import exampleCode from '!raw-loader!./example';

import { Category } from '../storiesHierarchy';

import { SegmentedToggle, Box } from 'wix-style-react';

const PlaygroundWrapper = () => {
  const [layout, setLayout] = React.useState('vertical');

  return (
    <div
      style={{
        /* expand playground area to be wider than parent element */
        /* keep 5% distance from screen edge on left and right */
        margin: `0 calc((100vw / 2 - 100% / 2) * -1 + 5%)`,
      }}
    >
      <Playground
        key={layout}
        compact={layout === 'horizontal'}
        initiallyOpen={layout === 'horizontal'}
        initialCode={exampleCode}
        scope={allComponents}
        formatSnippetUrl={id => `${window.parent.location.href}&snippet=${id}`}
      />

      <Box align="right">
        <SegmentedToggle
          selected={layout}
          onClick={(e, value) => setLayout(value)}
        >
          <SegmentedToggle.Button
            prefixIcon={<LayoutListWithPanel />}
            value="vertical"
          >
            Vertical layout
          </SegmentedToggle.Button>
          <SegmentedToggle.Button
            value="horizontal"
            prefixIcon={<LayoutList />}
          >
            Horizontal layout
          </SegmentedToggle.Button>
        </SegmentedToggle>
      </Box>
    </div>
  );
};

export default {
  category: Category.PLAYGROUND,
  storyName: 'Playground',
  sections: [
    header({
      title: 'Playground',
    }),

    description(`> "Design is not just what it looks like and feels like. Design is how it works" (Steve Jobs)

This playground is a great way to play with the \`wix-style-react\` components and create prototypes.
`),

    description({
      title: 'Instructions',
      text: `To apply theme for playground components - wrap your snippet with \`ThemeProvider\` and apply one of the following themes: ${Object.keys(
        themes,
      ).map(theme => ` \`${theme}\``)}.`,
    }),

    description(<PlaygroundWrapper />),
  ],
};
