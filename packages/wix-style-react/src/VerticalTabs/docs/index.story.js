import React from 'react';
import {
  header,
  tabs,
  tab,
  description,
  importExample,
  title,
  columns,
  divider,
  example as baseExample,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';
import VerticalTabs from '..';
import * as examples from './verticalTabsExample';

const example = config => baseExample({ components: allComponents, ...config });

const exampleChildren = [
  {
    label: 'Grouped tab items',
    value: (
      <VerticalTabs.TabsGroup title="Group Title">
        <VerticalTabs.TabItem>Tab Item 1</VerticalTabs.TabItem>
        <VerticalTabs.TabItem>Tab Item 2</VerticalTabs.TabItem>
        <VerticalTabs.TabItem>Tab Item 3</VerticalTabs.TabItem>
      </VerticalTabs.TabsGroup>
    ),
  },
];

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: VerticalTabs,
  componentPath: '..',

  componentProps: {
    size: 'medium',
    children: exampleChildren[0].value,
  },

  exampleProps: {
    children: exampleChildren,
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${VerticalTabs.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text:
              'Vertical tabs is a navigation component. It allows to create lists that can be customized by a user. Use it in compact layouts when tabs have many items.',
          }),

          importExample(),

          divider(),

          title('Examples'),

          example({
            title: 'Vertical Tabs With Suffix and one Disabled tab',
            source: examples.verticalTabsSuffixExample,
          }),

          example({
            title: 'Vertical Tabs With Suffix - Small Size',
            source: examples.verticalTabsSmallExample,
          }),

          example({
            title: 'Vertical Tabs With Footer',
            source: examples.verticalTabsFooterExample,
          }),

          example({
            title: 'Vertical Tabs - Tab Selection',
            source: examples.verticalTabsSelectedExample,
          }),

          example({
            title: 'Vertical Tabs With Prefix and Multiple Tab Groups',
            source: examples.verticalTabsExample,
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
