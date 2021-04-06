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
  api,
  testkit,
  playground,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';
import StructureExampleRaw from '!raw-loader!./examples/Structure';
import SizesExampleRaw from '!raw-loader!./examples/Sizes';
import CustomizingTagsExampleRaw from '!raw-loader!./examples/CustomizingTags';
import UsageExampleRaw from '!raw-loader!./examples/Usage';
import CollapsableExampleRaw from '!raw-loader!./examples/Collapsable';

import TagList from '..';

const example = config => baseExample({ components: allComponents, ...config });

const exampleTags = [
  {
    label: 'Two Tags',
    value: [
      { id: '1', children: 'In Progress' },
      { id: '2', children: 'Canceled By Client' },
    ],
  },
  {
    label: 'Three Tags',
    value: [
      { id: '1', children: 'In Progress' },
      { id: '2', children: 'Canceled By Client' },
      { id: '3', children: 'Last  7 Days' },
    ],
  },
];

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: TagList,
  componentPath: '..',

  componentProps: {
    tags: exampleTags[0].value,
    size: 'small',
  },

  exampleProps: {
    tags: exampleTags,
    actionButton: [{ label: 'Button' }],
  },

  exampleImport: `import { TagList } from 'wix-style-react';`,

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${TagList.displayName}/`,
      component: (
        <TagList
          tags={[
            {
              id: '1',
              children: 'Some Tag',
            },
          ]}
          actionButton={{
            label: 'Clear All',
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
              'TagList is a group of tags and buttons. It shows the summary of picked options. Use it to display applied filters or keywords.',
          }),

          importExample(),

          divider(),

          title('Examples'),

          example({
            title: 'Structure',
            text:
              'Component consists of any number tag and button subcomponents.',
            source: StructureExampleRaw,
          }),

          example({
            title: 'Sizes',
            text:
              'Component supports three sizes – `small`, `medium` and `large`. Default size is `small`.',
            source: SizesExampleRaw,
          }),

          example({
            title: 'Customizing Tags',
            text: `Component allows to pass all <Tag/> properties except size.`,
            source: CustomizingTagsExampleRaw,
          }),

          example({
            title: 'Expandable',
            text:
              'Component allows to pass the maxVisibleTags prop to limit the number of tags shown (default: 3).',
            source: CollapsableExampleRaw,
          }),

          example({
            title: 'Usage',
            text: `Use it inside table SubToolbar to display applied filters.`,
            source: UsageExampleRaw,
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
