import React from 'react';

import { createAutoExampleWrapper } from '../../../stories/utils/AutoExampleWrapper';
import {
  api,
  example as baseExample,
  description,
  divider,
  header,
  importExample,
  playground,
  tab,
  tabs,
  testkit,
  title,
} from 'wix-storybook-utils/dist/src/Sections';
import allComponents from '../../../stories/utils/allComponents';
import * as examples from './examples';

const example = config => baseExample({ components: allComponents, ...config });

import { storySettings } from './storySettings';
import Tabs from '../Tabs';

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,
  component: createAutoExampleWrapper(Tabs),
  componentPath: '..',

  componentProps: setProps => ({
    onClick: value => setProps({ activeId: value.id }),
    activeId: '1',
    hasDivider: true,
    items: [1, 2, 3].map(index => ({
      id: String(index),
      title: `item ${index}`,
    })),
  }),

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${Tabs.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description(
            `Tabs component enables navigation between content at the same page.`,
          ),

          importExample("import { Tabs } from 'wix-style-react';"),

          divider(),

          title('Examples'),

          example({
            title: 'Basic use',
            text:
              'Tabs is a controlled component, provide `activeId` and `onClick` to use.',
            source: examples.base,
          }),

          example({
            title: 'Without bottom divider',
            text:
              'By default, Tabs has a bottom divider, in order to remove it use the `hasDivider` prop.',
            source: examples.hasDivider,
          }),

          example({
            title: 'Small Tab size',
            text: 'Tabs comes in two sizes `medium` (default) and `small`.',
            source: examples.smallSize,
          }),

          example({
            title: 'Tabs types',
            text: `
Tabs component has a minimal width of 628px by design.\n
It has some variations how to spread the tab items with respect to the width:
- \`default\` - Every item can grow/shrink according to the content.
- \`compact\` - Every item can grow/shrink according to the content with a maximal width accross the whole width.
- \`compactSide\` - Every item can grow/shrink according to the content with a maximal width.
- \`uniformSide\` - All items grow to the same size.
- \`uniformFull\` - All items grow to the same size accross the whole width.
            `,
            source: examples.types,
          }),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Testkit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};
