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

import ComposerSidebar from '..';
import * as examples from './examples';
import { items } from './examples';

const example = config => baseExample({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,
  component: ComposerSidebar,
  componentPath: '..',

  componentProps: {
    labelPlacement: 'end',
    size: 'medium',
    selectedId: 1,
    items,
  },

  exampleProps: {
    labelPlacement: ['bottom', 'end'],
    size: ['medium', 'large'],
    selectedId: [{ label: '0', value: 0 }, 1, 2, 3],
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${ComposerSidebar.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text:
              'Composer Sidebar is the navigation designed to control composer’s side panel. It supports multilpe button sizes and various text positions to work well with few or many items.',
          }),

          importExample(),

          divider(),

          title('Examples'),

          example({
            title: 'Label Placement',
            text:
              'Products with many tabs should place text on the `end` while products with few can place it  `bottom`.',
            source: examples.labelPlacement,
          }),

          example({
            title: 'Size',
            text:
              'If a sidebar needs to be emphasized it should appear in `large` size, while advanced layouts with many items better perform as `medium`.',
            source: examples.sizes,
          }),

          example({
            title: 'Disabled',
            text:
              'Sidebar’s tab can be disabled if it’s needed to show that action is unavailable.',
            source: examples.disabled,
          }),

          example({
            title: 'Interactive Example',
            text: 'Click on tabs and see how the complete component works.',
            source: examples.fullInteractive,
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
