import React from 'react';
import {
  header,
  tabs,
  tab,
  description,
  importExample,
  title,
  divider,
  example as baseExample,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';
import * as examples from './examples';
import Button from '../../Button';

import MarketingPageLayoutContent from '..';

const example = config => baseExample({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: MarketingPageLayoutContent,
  componentPath: '..',

  componentProps: {
    overline: 'overline text',
    title: 'title text',
    subtitle: 'subtitle text',
    content: 'content text',
  },

  exampleProps: {
    actions: [
      {
        label: 'Action button',
        value: <Button size="large">Main Action</Button>,
      },
    ],
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${MarketingPageLayoutContent.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text:
              'MarketingPageLayoutContent is a building part used in MarketingPageLayout component. It displays heading, content and action areas. Each area is highly customizable to suits various cases. Use it in MarketingPage component to layout texts.',
          }),

          importExample(
            "import { MarketingPageLayoutContent } from 'wix-style-react';",
          ),

          divider(),

          title('Examples'),

          example({
            title: 'Structure',
            text:
              'Component has outline, title, subtitle, content and action areas. Each area is optional and highly customizable, only spacing between areas is preset.',
            source: examples.basicExample,
          }),

          example({
            title: 'Sizes',
            text:
              'Component supports 2 sizes – medium and large. Large is default. This property is used to build breakpoints.',
            source: examples.sizesExample,
          }),

          example({
            title: 'Advanced Example',
            text:
              'Component is highly customizable and supports complex layouts. This example shows how to add a footer in action area.',
            source: examples.advancedExample,
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
