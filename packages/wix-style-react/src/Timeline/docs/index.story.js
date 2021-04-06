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
  code as baseCode,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';
import * as examples from './examples';
import Timeline from '..';

const example = config => baseExample({ components: allComponents, ...config });
const code = config => baseCode({ components: allComponents, ...config });

const oneItem = [{ label: 'Item 1' }];
const twoItems = [...oneItem, { label: 'Item 2' }];
const threeItems = [...twoItems, { label: 'Item 3' }];

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: Timeline,
  componentPath: '..',

  componentProps: {
    items: oneItem,
  },

  exampleProps: {
    items: [
      { label: '1 item', value: oneItem },
      { label: '2 items', value: twoItems },
      { label: '3 items', value: threeItems },
    ],
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${Timeline.displayName}/`,
      component: <Timeline items={twoItems} />,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text: 'A component to display events in a vertical timeline format',
          }),

          importExample(),

          divider(),

          title('Examples'),

          example({
            title: 'Simple Usage',
            text: 'A simple example with compact preview',
            source: examples.simple,
          }),

          example({
            title: 'Custom Content',
            text:
              "Component's label allows to insert any content to build custom layouts.",
            source: examples.customExample,
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
