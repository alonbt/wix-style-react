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
import {
  simpleUsage,
  collapsedLabelsUsage,
  combinedData,
  standardData,
} from './examples';

import AreaChart from '..';

const example = config => baseExample({ components: allComponents, ...config });
const code = config => baseCode({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: AreaChart,
  componentPath: '..',

  componentProps: {
    data: combinedData,
    tooltipContent: (item, index) => [
      `${item.label}`,
      `${item.value}$ from your orders`,
    ],
  },

  exampleProps: {
    // Put here presets of props, for more info:
    // https://github.com/wix/wix-ui/blob/master/packages/wix-storybook-utils/docs/usage.md#using-list
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${AreaChart.displayName}/`,
      component: (
        <AreaChart
          data={standardData}
          tooltipContent={(item, index) => {
            return [`${item.label}`, `${item.value}$ from your orders`];
          }}
        />
      ),
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text:
              'An area chart is a way of plotting data points on a line. Often, it is used to show trend data.',
          }),

          importExample(),

          divider(),

          title('Examples'),

          example({
            title: 'Simple Usage',
            text: 'A simple example with compact preview',
            source: simpleUsage,
          }),
          example({
            title: 'Collapsed values',
            text:
              'A simple example of collapsed values (hover on a point between some x labels)',
            source: collapsedLabelsUsage,
          }),

          code({
            title: 'Full Interactive Preview',
            description: 'A non compact version of same code example as above',
            source: simpleUsage,
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
