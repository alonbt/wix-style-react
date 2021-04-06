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
  columns,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';
import * as examples from './examples';
import HorizontalTimeline from '..';

const example = config =>
  baseExample({ components: { ...allComponents }, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: HorizontalTimeline,
  componentPath: '..',

  componentProps: {
    items: [],
  },

  exampleProps: {
    // Put here presets of props, for more info:
    // https://github.com/wix/wix-ui/blob/master/packages/wix-storybook-utils/docs/usage.md#using-list
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${HorizontalTimeline.displayName}/`,
      component: (
        <div style={{ width: '600px' }}>
          <HorizontalTimeline
            items={[
              {
                label: 'Instructions completed',
                skin: 'dark',
                icon: <HorizontalTimeline.CompleteIcon />,
              },
              {
                label: 'Domain check',
                skin: 'dark',
                icon: <HorizontalTimeline.ActiveIcon />,
              },
              { label: 'Domain connecting' },
              { label: 'Site is live worldwide' },
            ]}
          />
        </div>
      ),
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          columns([
            description({
              title: 'Description',
              text:
                'HorizontalTimeline is a layout component that lists events in a horizontal line. Each event can have a specific status or icon. Use it to display domain connection status.',
            }),
          ]),

          importExample(
            "import { HorizontalTimeline } from 'wix-style-react';",
          ),

          divider(),

          title('Examples'),

          ...[
            {
              title: 'Structure',
              description: `Component can have any number of items. Each item's label and line color can appear dark or light by using 'skin' prop.`,
              source: examples.structure,
            },
            {
              title: 'Custom items width',
              description:
                'Component divides items to equal columns. If needed each column’s width can be adjusted manually.',
              source: examples.width,
            },
            {
              title: 'Predefined Statuses',
              description: `Component has 4 predefined status icons — default, active, complete and destructive. Use them to show the status of timeline events.`,
              source: examples.predefined,
            },
          ].map(example),
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
