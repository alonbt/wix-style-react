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
import Star from 'wix-ui-icons-common/Star';
import * as examples from './examples';

import CounterBadge from '..';

const example = config => baseExample({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: 'CounterBadge',

  component: CounterBadge,
  componentPath: '..',

  componentProps: {
    size: 'small',
    children: 1,
    skin: 'general',
    showShadow: false,
  },

  exampleProps: {
    children: [
      { label: 'number', value: 1 },
      { label: 'string', value: 'New!' },
      { label: 'node', value: <Star /> },
    ],
  },

  sections: [
    header({
      component: <CounterBadge>1</CounterBadge>,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text:
              '`CounterBadge` gives you a quick preview to indicate more action is required.',
          }),

          importExample("import { CounterBadge } from 'wix-style-react';"),

          divider(),

          title('Examples'),

          example({
            title: 'Number counter',
            text:
              'The most common use of CounterBadge is with a number value truncated to 99. CounterBadge comes in two sizes `small` (default) and `medium`.',
            source: examples.numbers,
          }),

          example({
            title: 'Skins',
            text:
              'Background color can be one of the following: `general`, `danger`, `urgent`, `standard`, `warning`, `success` and `light`.',
            source: examples.skins,
          }),

          example({
            title: 'Shadow',
            text: 'CounterBadge can add a shadow using `showShadow` prop',
            source: examples.shadow,
          }),

          example({
            title: 'Custom node',
            text: 'CounterBadge can display a custom node, like an icon.',
            source: examples.custom,
          }),

          example({
            title: 'Advanced',
            text: 'An example for a CounterBadge counting items in cart.',
            source: examples.advanced,
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
